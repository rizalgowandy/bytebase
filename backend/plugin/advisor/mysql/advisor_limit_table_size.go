package mysql

import (
	"fmt"

	"github.com/antlr4-go/antlr/v4"
	"github.com/pkg/errors"

	mysql "github.com/bytebase/mysql-parser"

	mysqlparser "github.com/bytebase/bytebase/backend/plugin/parser/mysql"
	"github.com/bytebase/bytebase/proto/generated-go/store"

	"github.com/bytebase/bytebase/backend/plugin/advisor"
)

func init() {
	advisor.Register(store.Engine_MYSQL, advisor.MySQLTableLimitSize, &MaximumTableSizeAdvisor{})
}

type MaximumTableSizeAdvisor struct {
}

type MaximumTableSizeChecker struct {
	*mysql.BaseMySQLParserListener
	affectedTabNames []string
	baseLine         int
}

var (
	_ advisor.Advisor = &MaximumTableSizeAdvisor{}
)

// If table size > xx bytes, then warning/error.
func (*MaximumTableSizeAdvisor) Check(ctx advisor.Context, _ string) ([]advisor.Advice, error) {
	var adviceList []advisor.Advice
	if ctx.ChangeType != store.PlanCheckRunConfig_DDL {
		return []advisor.Advice{{
			Status:  advisor.Success,
			Code:    advisor.Ok,
			Title:   "OK",
			Content: "",
		}}, nil
	}

	payload, err := advisor.UnmarshalNumberTypeRulePayload(ctx.Rule.Payload)
	if err != nil {
		return nil, err
	}

	statParsedResults, ok := ctx.AST.([]*mysqlparser.ParseResult)
	if !ok {
		return nil, errors.Errorf("failed to convert to mysql parse result")
	}

	// User defined rule level.
	status, err := advisor.NewStatusBySQLReviewRuleLevel(ctx.Rule.Level)
	if err != nil {
		return nil, err
	}

	for _, parsedResult := range statParsedResults {
		statTypeChecker := &mysqlparser.StatementTypeChecker{}
		antlr.ParseTreeWalkerDefault.Walk(statTypeChecker, parsedResult.Tree)

		tableSizeChecker := &MaximumTableSizeChecker{}
		statementBaseLine := parsedResult.BaseLine
		if statTypeChecker.IsDDL {
			// Get table name.
			antlr.ParseTreeWalkerDefault.Walk(tableSizeChecker, parsedResult.Tree)
			if ctx.DBSchema != nil && len(ctx.DBSchema.Schemas) != 0 {
				// Check all table size.
				for _, tabName := range tableSizeChecker.affectedTabNames {
					dataSize := getTabSizeByName(tabName, ctx.DBSchema.Schemas[0].Tables)
					if dataSize >= int64(payload.Number) {
						adviceList = append(adviceList, advisor.Advice{
							Status:  status,
							Code:    advisor.TableExceedLimitSize,
							Title:   ctx.Rule.Type,
							Content: fmt.Sprintf("Apply DDL on large table '%s' ( %d bytes )will lock table for a long time", tabName, dataSize),
							Line:    statementBaseLine + tableSizeChecker.baseLine,
						})
					}
				}
			}
		}
	}

	if len(adviceList) == 0 {
		return []advisor.Advice{{
			Status:  advisor.Success,
			Code:    advisor.Ok,
			Title:   "OK",
			Content: "",
		}}, nil
	}
	return adviceList, nil
}

func (checker *MaximumTableSizeChecker) EnterAlterTable(ctx *mysql.AlterTableContext) {
	_, tableName := mysqlparser.NormalizeMySQLTableRef(ctx.TableRef())
	checker.baseLine = ctx.GetStart().GetLine()
	checker.affectedTabNames = append(checker.affectedTabNames, tableName)
}

func (checker *MaximumTableSizeChecker) EnterTruncateTableStatement(ctx *mysql.TruncateTableStatementContext) {
	_, tableName := mysqlparser.NormalizeMySQLTableRef(ctx.TableRef())
	checker.baseLine = ctx.GetStart().GetLine()
	checker.affectedTabNames = append(checker.affectedTabNames, tableName)
}

func (checker *MaximumTableSizeChecker) EnterDropTable(ctx *mysql.DropTableContext) {
	checker.baseLine = ctx.GetStart().GetLine()
	for _, tabRef := range ctx.TableRefList().AllTableRef() {
		_, tableName := mysqlparser.NormalizeMySQLTableRef(tabRef)
		checker.affectedTabNames = append(checker.affectedTabNames, tableName)
	}
}

func getTabSizeByName(targetTabName string, tables []*store.TableMetadata) int64 {
	for _, table := range tables {
		if table.Name == targetTabName {
			return table.DataSize
		}
	}
	return 0
}
