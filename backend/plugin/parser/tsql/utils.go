package tsql

// tsqlReservedKeywordsMap is the map of all TSQL keywords.
// Crawled from https://learn.microsoft.com/en-us/sql/t-sql/language-elements/reserved-keywords-transact-sql?view=sql-server-ver16.
var tsqlReservedKeywordsMap = map[string]bool{
	"OVER":                             true,
	"END-EXEC":                         true,
	"ESCAPE":                           true,
	"XMLATTRIBUTES":                    true,
	"OPTION":                           true,
	"SIMILAR":                          true,
	"XMLTEXT":                          true,
	"CHECK":                            true,
	"BETWEEN":                          true,
	"XMLTABLE":                         true,
	"SQLSTATE":                         true,
	"OLD":                              true,
	"ROWCOUNT":                         true,
	"VARCHAR":                          true,
	"PERCENT_RANK":                     true,
	"EVERY":                            true,
	"ALL":                              true,
	"RULE":                             true,
	"PIVOT":                            true,
	"CONNECTION":                       true,
	"CLASS":                            true,
	"PAD":                              true,
	"UESCAPE":                          true,
	"XMLPARSE":                         true,
	"BLOB":                             true,
	"EXEC":                             true,
	"EXCEPTION":                        true,
	"ROWGUIDCOL":                       true,
	"RESULT":                           true,
	"DYNAMIC":                          true,
	"TEMPORARY":                        true,
	"ASC":                              true,
	"XMLITERATE":                       true,
	"DETERMINISTIC":                    true,
	"START":                            true,
	"CURRENT_TRANSFORM_GROUP_FOR_TYPE": true,
	"MODIFY":                           true,
	"STATEMENT":                        true,
	"PLAN":                             true,
	"XMLFOREST":                        true,
	"SQLWARNING":                       true,
	"MATCH":                            true,
	"CALLED":                           true,
	"OPENXML":                          true,
	"ROW":                              true,
	"CURSOR":                           true,
	"INTERVAL":                         true,
	"ADA":                              true,
	"REPLICATION":                      true,
	"CUME_DIST":                        true,
	"WITHIN GROUP":                     true,
	"CLOSE":                            true,
	"UPPER":                            true,
	"REVERT":                           true,
	"USING":                            true,
	"DECIMAL":                          true,
	"FULL":                             true,
	"USER":                             true,
	"TRUNCATE":                         true,
	"IMMEDIATE":                        true,
	"REGR_SLOPE":                       true,
	"SEMANTICSIMILARITYTABLE":          true,
	"PASCAL":                           true,
	"SEMANTICSIMILARITYDETAILSTABLE":   true,
	"RETURN":                           true,
	"PRIOR":                            true,
	"NONCLUSTERED":                     true,
	"INTERSECT":                        true,
	"ON":                               true,
	"TRAILING":                         true,
	"DISTINCT":                         true,
	"FETCH":                            true,
	"PARTITION":                        true,
	"AT":                               true,
	"TSEQUAL":                          true,
	"BREADTH":                          true,
	"SECTION":                          true,
	"MODIFIES":                         true,
	"OPERATION":                        true,
	"CONSTRAINTS":                      true,
	"ITERATE":                          true,
	"AND":                              true,
	"XMLVALIDATE":                      true,
	"COUNT":                            true,
	"ASYMMETRIC":                       true,
	"DESCRIPTOR":                       true,
	"SCOPE":                            true,
	"EXTERNAL":                         true,
	"FOR":                              true,
	"SELECT":                           true,
	"STATE":                            true,
	"TERMINATE":                        true,
	"EQUALS":                           true,
	"XMLPI":                            true,
	"ORDINALITY":                       true,
	"PRESERVE":                         true,
	"PRIMARY":                          true,
	"TOP":                              true,
	"GOTO":                             true,
	"BEGIN":                            true,
	"SET":                              true,
	"ISOLATION":                        true,
	"USAGE":                            true,
	"ARRAY":                            true,
	"BACKUP":                           true,
	"REFERENCES":                       true,
	"DEC":                              true,
	"DEFERRABLE":                       true,
	"WRITE":                            true,
	"ROLLBACK":                         true,
	"WAITFOR":                          true,
	"ROWS":                             true,
	"LIKE":                             true,
	"ASENSITIVE":                       true,
	"XMLCONCAT":                        true,
	"USE":                              true,
	"DAY":                              true,
	"INCLUDE":                          true,
	"OCTET_LENGTH":                     true,
	"UNKNOWN":                          true,
	"OBJECT":                           true,
	"SPECIFIC":                         true,
	"WORK":                             true,
	"SEQUENCE":                         true,
	"GRANT":                            true,
	"OPENROWSET":                       true,
	"LESS":                             true,
	"REGR_AVGY":                        true,
	"DOUBLE":                           true,
	"TRY_CONVERT":                      true,
	"HAVING":                           true,
	"PROC":                             true,
	"CLUSTERED":                        true,
	"CHARACTER_LENGTH":                 true,
	"GLOBAL":                           true,
	"DROP":                             true,
	"ELEMENT":                          true,
	"IDENTITYCOL":                      true,
	"LOCALTIMESTAMP":                   true,
	"NOCHECK":                          true,
	"OPENQUERY":                        true,
	"LAST":                             true,
	"LOCATOR":                          true,
	"COVAR_POP":                        true,
	"DELETE":                           true,
	"SYSTEM_USER":                      true,
	"DESTRUCTOR":                       true,
	"UNDER":                            true,
	"WITHIN":                           true,
	"WITH":                             true,
	"NO":                               true,
	"NCLOB":                            true,
	"LATERAL":                          true,
	"LEVEL":                            true,
	"SQLEXCEPTION":                     true,
	"INNER":                            true,
	"FOREIGN":                          true,
	"REGR_INTERCEPT":                   true,
	"XMLCOMMENT":                       true,
	"FUSION":                           true,
	"INTO":                             true,
	"NOT":                              true,
	"LOWER":                            true,
	"INITIALIZE":                       true,
	"SUBMULTISET":                      true,
	"SCHEMA":                           true,
	"PREFIX":                           true,
	"TRANSLATION":                      true,
	"MEMBER":                           true,
	"ACTION":                           true,
	"METHOD":                           true,
	"EXECUTE":                          true,
	"NATIONAL":                         true,
	"RIGHT":                            true,
	"PERCENTILE_CONT":                  true,
	"OVERLAPS":                         true,
	"MIN":                              true,
	"VARIABLE":                         true,
	"PRIVILEGES":                       true,
	"DESCRIBE":                         true,
	"FILE":                             true,
	"KILL":                             true,
	"CYCLE":                            true,
	"SQLCODE":                          true,
	"READS":                            true,
	"REGR_SXY":                         true,
	"LINENO":                           true,
	"INTERSECTION":                     true,
	"REGR_SXX":                         true,
	"BREAK":                            true,
	"CALL":                             true,
	"RETURNS":                          true,
	"LN":                               true,
	"MODULE":                           true,
	"DISCONNECT":                       true,
	"DATABASE":                         true,
	"PERCENTILE_DISC":                  true,
	"CURRENT_DATE":                     true,
	"RELATIVE":                         true,
	"DESTROY":                          true,
	"LIMIT":                            true,
	"VAR_POP":                          true,
	"EACH":                             true,
	"END":                              true,
	"FALSE":                            true,
	"PARAMETERS":                       true,
	"IGNORE":                           true,
	"GET":                              true,
	"FREE":                             true,
	"XMLNAMESPACES":                    true,
	"ALIAS":                            true,
	"REGR_COUNT":                       true,
	"CONTAINSTABLE":                    true,
	"SCROLL":                           true,
	"RESTRICT":                         true,
	"ALLOCATE":                         true,
	"ONLY":                             true,
	"DOMAIN":                           true,
	"SMALLINT":                         true,
	"DATE":                             true,
	"BINARY":                           true,
	"VAR_SAMP":                         true,
	"TREAT":                            true,
	"OPENDATASOURCE":                   true,
	"THAN":                             true,
	"NUMERIC":                          true,
	"COMMIT":                           true,
	"EXCEPT":                           true,
	"FORTRAN":                          true,
	"OFF":                              true,
	"TIMEZONE_MINUTE":                  true,
	"PREPARE":                          true,
	"OUTER":                            true,
	"SQL":                              true,
	"FULLTEXTTABLE":                    true,
	"PRECISION":                        true,
	"CROSS":                            true,
	"SAVE":                             true,
	"LEFT":                             true,
	"FILTER":                           true,
	"SAVEPOINT":                        true,
	"TRANSACTION":                      true,
	"WHILE":                            true,
	"STRUCTURE":                        true,
	"READ":                             true,
	"ROLE":                             true,
	"VALUE":                            true,
	"REVOKE":                           true,
	"ZONE":                             true,
	"XMLEXISTS":                        true,
	"INTEGER":                          true,
	"WHERE":                            true,
	"SUBSTRING":                        true,
	"NAMES":                            true,
	"IDENTITY":                         true,
	"IN":                               true,
	"SEMANTICKEYPHRASETABLE":           true,
	"RELEASE":                          true,
	"DATA":                             true,
	"AGGREGATE":                        true,
	"DENY":                             true,
	"TRIM":                             true,
	"SESSION":                          true,
	"INDICATOR":                        true,
	"EXTRACT":                          true,
	"NATURAL":                          true,
	"DISTRIBUTED":                      true,
	"TEXTSIZE":                         true,
	"CAST":                             true,
	"CARDINALITY":                      true,
	"BROWSE":                           true,
	"NEW":                              true,
	"BOOLEAN":                          true,
	"OCCURRENCES_REGEX":                true,
	"XMLSERIALIZE":                     true,
	"CURRENT_DEFAULT_TRANSFORM_GROUP":  true,
	"INDEX":                            true,
	"INSENSITIVE":                      true,
	"CONVERT":                          true,
	"SOME":                             true,
	"GENERAL":                          true,
	"KEY":                              true,
	"VARYING":                          true,
	"CONTAINS":                         true,
	"OUT":                              true,
	"MAX":                              true,
	"REFERENCING":                      true,
	"PREORDER":                         true,
	"OR":                               true,
	"HOLDLOCK":                         true,
	"STDDEV_POP":                       true,
	"XMLCAST":                          true,
	"INPUT":                            true,
	"ASSERTION":                        true,
	"DEALLOCATE":                       true,
	"XMLDOCUMENT":                      true,
	"CHAR":                             true,
	"INOUT":                            true,
	"DEFERRED":                         true,
	"READTEXT":                         true,
	"COLLATION":                        true,
	"STATIC":                           true,
	"FREETEXTTABLE":                    true,
	"THEN":                             true,
	"GROUPING":                         true,
	"SQLERROR":                         true,
	"NORMALIZE":                        true,
	"BEFORE":                           true,
	"SECOND":                           true,
	"DBCC":                             true,
	"FIRST":                            true,
	"ROUTINE":                          true,
	"COLUMN":                           true,
	"ABSOLUTE":                         true,
	"WRITETEXT":                        true,
	"IS":                               true,
	"NCHAR":                            true,
	"CONSTRAINT":                       true,
	"ERRLVL":                           true,
	"DUMP":                             true,
	"TIMEZONE_HOUR":                    true,
	"YEAR":                             true,
	"OVERLAY":                          true,
	"ROLLUP":                           true,
	"POSITION":                         true,
	"BIT":                              true,
	"SYSTEM":                           true,
	"REF":                              true,
	"CHAR_LENGTH":                      true,
	"GROUP":                            true,
	"LOAD":                             true,
	"IDENTITY_INSERT":                  true,
	"TRAN":                             true,
	"XMLELEMENT":                       true,
	"XMLBINARY":                        true,
	"SUBSTRING_REGEX":                  true,
	"LABEL":                            true,
	"ARE":                              true,
	"REGR_R2":                          true,
	"SENSITIVE":                        true,
	"INITIALLY":                        true,
	"CHECKPOINT":                       true,
	"DICTIONARY":                       true,
	"GO":                               true,
	"REAL":                             true,
	"IF":                               true,
	"HOST":                             true,
	"CASCADE":                          true,
	"DEPTH":                            true,
	"ALTER":                            true,
	"TRUE":                             true,
	"CURRENT_ROLE":                     true,
	"TO":                               true,
	"DISK":                             true,
	"OUTPUT":                           true,
	"STATISTICS":                       true,
	"FLOAT":                            true,
	"CURRENT_PATH":                     true,
	"NONE":                             true,
	"VIEW":                             true,
	"LARGE":                            true,
	"SHUTDOWN":                         true,
	"SEARCH":                           true,
	"DECLARE":                          true,
	"CURRENT_CATALOG":                  true,
	"POSTFIX":                          true,
	"WITHOUT":                          true,
	"XMLQUERY":                         true,
	"WINDOW":                           true,
	"PERCENT":                          true,
	"COMPUTE":                          true,
	"STDDEV_SAMP":                      true,
	"SYMMETRIC":                        true,
	"CONSTRUCTOR":                      true,
	"COLLECT":                          true,
	"PARAMETER":                        true,
	"COALESCE":                         true,
	"SETS":                             true,
	"CREATE":                           true,
	"TABLE":                            true,
	"DIAGNOSTICS":                      true,
	"CURRENT_SCHEMA":                   true,
	"MERGE":                            true,
	"AUTHORIZATION":                    true,
	"SUM":                              true,
	"SPACE":                            true,
	"CLOB":                             true,
	"CORRESPONDING":                    true,
	"CASE":                             true,
	"FILLFACTOR":                       true,
	"LEADING":                          true,
	"COMPLETION":                       true,
	"CUBE":                             true,
	"UNION":                            true,
	"BULK":                             true,
	"LOCAL":                            true,
	"ADD":                              true,
	"DEREF":                            true,
	"DESC":                             true,
	"OPEN":                             true,
	"RESTORE":                          true,
	"JOIN":                             true,
	"MONTH":                            true,
	"POSITION_REGEX":                   true,
	"MAP":                              true,
	"REGR_SYY":                         true,
	"HOUR":                             true,
	"VALUES":                           true,
	"TRANSLATE_REGEX":                  true,
	"FOUND":                            true,
	"RANGE":                            true,
	"BOTH":                             true,
	"INSERT":                           true,
	"COVAR_SAMP":                       true,
	"CURRENT_USER":                     true,
	"AVG":                              true,
	"REGR_AVGX":                        true,
	"LANGUAGE":                         true,
	"SIZE":                             true,
	"PROCEDURE":                        true,
	"ORDER":                            true,
	"CORR":                             true,
	"NULL":                             true,
	"SPECIFICTYPE":                     true,
	"SESSION_USER":                     true,
	"RECURSIVE":                        true,
	"PUBLIC":                           true,
	"AS":                               true,
	"RECONFIGURE":                      true,
	"CONDITION":                        true,
	"TIMESTAMP":                        true,
	"OFFSETS":                          true,
	"SQLCA":                            true,
	"INT":                              true,
	"TIME":                             true,
	"LIKE_REGEX":                       true,
	"RAISERROR":                        true,
	"CURRENT_TIME":                     true,
	"PARTIAL":                          true,
	"ATOMIC":                           true,
	"FUNCTION":                         true,
	"UPDATE":                           true,
	"ADMIN":                            true,
	"MOD":                              true,
	"EXISTS":                           true,
	"SECURITYAUDIT":                    true,
	"CONTINUE":                         true,
	"UNIQUE":                           true,
	"CONNECT":                          true,
	"LOCALTIME":                        true,
	"COLLATE":                          true,
	"CASCADED":                         true,
	"UNNEST":                           true,
	"ELSE":                             true,
	"CURRENT":                          true,
	"EXIT":                             true,
	"FREETEXT":                         true,
	"UPDATETEXT":                       true,
	"PATH":                             true,
	"XMLAGG":                           true,
	"MULTISET":                         true,
	"CHARACTER":                        true,
	"WHEN":                             true,
	"TRIGGER":                          true,
	"WIDTH_BUCKET":                     true,
	"AFTER":                            true,
	"TABLESAMPLE":                      true,
	"TRANSLATE":                        true,
	"DEFAULT":                          true,
	"HOLD":                             true,
	"BY":                               true,
	"CURRENT_TIMESTAMP":                true,
	"PRINT":                            true,
	"BIT_LENGTH":                       true,
	"CATALOG":                          true,
	"UNPIVOT":                          true,
	"WHENEVER":                         true,
	"FROM":                             true,
	"SETUSER":                          true,
	"OF":                               true,
	"NULLIF":                           true,
	"MINUTE":                           true,
	"NEXT":                             true,
	"ANY":                              true,
}

// tsqlBuiltinFunctionsMap is the map of all TSQL builtin functions, it is copy from https://sourcegraph.com/github.com/bytebase/tsql-parser/-/blob/TSqlParser.g4?L4183.
// https://sourcegraph.com/github.com/bytebase/tsql-parser/-/blob/TSqlParser.g4?L4183.
var tsqlBuiltinFunctionsMap = map[string]bool{
	"APP_NAME":                           true,
	"APPLOCK_MODE":                       true,
	"APPLOCK_TEST":                       true,
	"ASSEMBLYPROPERTY":                   true,
	"COL_LENGTH":                         true,
	"COL_NAME":                           true,
	"COLUMNPROPERTY":                     true,
	"DATABASEPROPERTYEX":                 true,
	"DB_ID":                              true,
	"DB_NAME":                            true,
	"FILE_ID":                            true,
	"FILE_IDEX":                          true,
	"FILE_NAME":                          true,
	"FILEGROUP_ID":                       true,
	"FILEGROUP_NAME":                     true,
	"FILEGROUPPROPERTY":                  true,
	"FILEPROPERTY":                       true,
	"FILEPROPERTYEX":                     true,
	"FULLTEXTCATALOGPROPERTY":            true,
	"FULLTEXTSERVICEPROPERTY":            true,
	"INDEX_COL":                          true,
	"INDEXKEY_PROPERTY":                  true,
	"INDEXPROPERTY":                      true,
	"NEXT_VALUE_FOR":                     true,
	"OBJECT_DEFINITION":                  true,
	"OBJECT_ID":                          true,
	"OBJECT_NAME":                        true,
	"OBJECT_SCHEMA_NAME":                 true,
	"OBJECTPROPERTY":                     true,
	"OBJECTPROPERTYEX":                   true,
	"ORIGINAL_DB_NAME":                   true,
	"PARSENAME":                          true,
	"SCHEMA_ID":                          true,
	"SCHEMA_NAME":                        true,
	"SCOPE_IDENTITY":                     true,
	"SERVERPROPERTY":                     true,
	"STATS_DATE":                         true,
	"TYPE_ID":                            true,
	"TYPE_NAME":                          true,
	"TYPEPROPERTY":                       true,
	"ASCII":                              true,
	"CHAR":                               true,
	"CHARINDEX":                          true,
	"CONCAT":                             true,
	"CONCAT_WS":                          true,
	"DIFFERENCE":                         true,
	"FORMAT":                             true,
	"LEFT":                               true,
	"LEN":                                true,
	"LOWER":                              true,
	"LTRIM":                              true,
	"NCHAR":                              true,
	"PATINDEX":                           true,
	"QUOTENAME":                          true,
	"REPLACE":                            true,
	"REPLICATE":                          true,
	"REVERSE":                            true,
	"RIGHT":                              true,
	"RTRIM":                              true,
	"SOUNDEX":                            true,
	"SPACE":                              true,
	"STR":                                true,
	"STRINGAGG":                          true,
	"STRING_ESCAPE":                      true,
	"STUFF":                              true,
	"SUBSTRING":                          true,
	"TRANSLATE":                          true,
	"TRIM":                               true,
	"UNICODE":                            true,
	"UPPER":                              true,
	"BINARY_CHECKSUM":                    true,
	"CHECKSUM":                           true,
	"COMPRESS":                           true,
	"CONNECTIONPROPERTY":                 true,
	"CONTEXT_INFO":                       true,
	"CURRENT_REQUEST_ID":                 true,
	"CURRENT_TRANSACTION_ID":             true,
	"DECOMPRESS":                         true,
	"ERROR_LINE":                         true,
	"ERROR_MESSAGE":                      true,
	"ERROR_NUMBER":                       true,
	"ERROR_PROCEDURE":                    true,
	"ERROR_SEVERITY":                     true,
	"ERROR_STATE":                        true,
	"FORMATMESSAGE":                      true,
	"GET_FILESTREAM_TRANSACTION_CONTEXT": true,
	"GETANSINULL":                        true,
	"HOST_ID":                            true,
	"HOST_NAME":                          true,
	"ISNULL":                             true,
	"ISNUMERIC":                          true,
	"MIN_ACTIVE_ROWVERSION":              true,
	"NEWID":                              true,
	"NEWSEQUENTIALID":                    true,
	"ROWCOUNT_BIG":                       true,
	"SESSION_CONTEXT":                    true,
	"XACT_STATE":                         true,
	"CAST":                               true,
	"TRY_CAST":                           true,
	"CONVERT":                            true,
	"COALESCE":                           true,
	"CURSOR_ROWS":                        true,
	"FETCH_STATUS":                       true,
	"CURSOR_STATUS":                      true,
	"CERT_ID":                            true,
	"DATALENGTH":                         true,
	"IDENT_CURRENT":                      true,
	"IDENT_INCR":                         true,
	"IDENT_SEED":                         true,
	"IDENTITY":                           true,
	"SQL_VARIANT_PROPERTY":               true,
	"CURRENT_DATE":                       true,
	"CURRENT_TIMESTAMP":                  true,
	"CURRENT_TIMEZONE":                   true,
	"CURRENT_TIMEZONE_ID":                true,
	"DATE_BUCKET":                        true,
	"DATEADD":                            true,
	"DATEDIFF":                           true,
	"DATEDIFF_BIG":                       true,
	"DATEFROMPARTS":                      true,
	"DATENAME":                           true,
	"DATEPART":                           true,
	"DATETIME2FROMPARTS":                 true,
	"DATETIMEFROMPARTS":                  true,
	"DATETIMEOFFSETFROMPARTS":            true,
	"DATETRUNC":                          true,
	"DAY":                                true,
	"EOMONTH":                            true,
	"GETDATE":                            true,
	"GETUTCDATE":                         true,
	"ISDATE":                             true,
	"MONTH":                              true,
	"SMALLDATETIMEFROMPARTS":             true,
	"SWITCHOFFSET":                       true,
	"SYSDATETIME":                        true,
	"SYSDATETIMEOFFSET":                  true,
	"SYSUTCDATETIME":                     true,
	"TIMEFROMPARTS":                      true,
	"TODATETIMEOFFSET":                   true,
	"YEAR":                               true,
	"NULLIF":                             true,
	"PARSE":                              true,
	"XML_DATA_TYPE_FUNC":                 true,
	"IIF":                                true,
	"ISJSON":                             true,
	"JSON_OBJECT":                        true,
	"JSON_ARRAY":                         true,
	"JSON_VALUE":                         true,
	"JSON_QUERY":                         true,
	"JSON_MODIFY":                        true,
	"JSON_PATH_EXISTS":                   true,
	"ABS":                                true,
	"ACOS":                               true,
	"ASIN":                               true,
	"ATAN":                               true,
	"ATN2":                               true,
	"CEILING":                            true,
	"COS":                                true,
	"COT":                                true,
	"DEGREES":                            true,
	"EXP":                                true,
	"FLOOR":                              true,
	"LOG":                                true,
	"LOG10":                              true,
	"PI":                                 true,
	"POWER":                              true,
	"RADIANS":                            true,
	"RAND":                               true,
	"ROUND":                              true,
	"MATH_SIGN":                          true,
	"SIN":                                true,
	"SQRT":                               true,
	"SQUARE":                             true,
	"TAN":                                true,
	"GREATEST":                           true,
	"LEAST":                              true,
	"CERTENCODED":                        true,
	"CERTPRIVATEKEY":                     true,
	"CURRENT_USER":                       true,
	"DATABASE_PRINCIPAL_ID":              true,
	"HAS_DBACCESS":                       true,
	"HAS_PERMS_BY_NAME":                  true,
	"IS_MEMBER":                          true,
	"IS_ROLEMEMBER":                      true,
	"IS_SRVROLEMEMBER":                   true,
	"LOGINPROPERTY":                      true,
	"ORIGINAL_LOGIN":                     true,
	"PERMISSIONS":                        true,
	"PWDENCRYPT":                         true,
	"PWDCOMPARE":                         true,
	"SESSION_USER":                       true,
	"SESSIONPROPERTY":                    true,
	"SUSER_ID":                           true,
	"SUSER_NAME":                         true,
	"SUSER_SID":                          true,
	"SUSER_SNAME":                        true,
	"SYSTEM_USER":                        true,
	"USER":                               true,
	"USER_ID":                            true,
	"USER_NAME":                          true,
}
