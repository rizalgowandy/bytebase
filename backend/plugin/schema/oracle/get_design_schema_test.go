package oracle

import (
	"io"
	"os"
	"testing"

	"github.com/stretchr/testify/require"
	"gopkg.in/yaml.v3"

	"github.com/bytebase/bytebase/backend/common"
	storepb "github.com/bytebase/bytebase/proto/generated-go/store"
)

type designTest struct {
	Baseline string
	Target   string
	Result   string
}

func TestGetDesignSchema(t *testing.T) {
	const (
		record = true
	)
	var (
		filepath = "testdata/get_design_schema.yaml"
	)

	a := require.New(t)
	yamlFile, err := os.Open(filepath)
	a.NoError(err)

	tests := []designTest{}
	byteValue, err := io.ReadAll(yamlFile)
	a.NoError(yamlFile.Close())
	a.NoError(err)
	a.NoError(yaml.Unmarshal(byteValue, &tests))

	for i, t := range tests {
		targetMeta := &storepb.DatabaseSchemaMetadata{}
		a.NoError(common.ProtojsonUnmarshaler.Unmarshal([]byte(t.Target), targetMeta))
		result, err := GetDesignSchema("", targetMeta)
		a.NoError(err)
		if record {
			tests[i].Result = result
		} else {
			a.Equal(t.Result, result)
		}
	}

	if record {
		byteValue, err := yaml.Marshal(tests)
		a.NoError(err)
		err = os.WriteFile(filepath, byteValue, 0644)
		a.NoError(err)
	}
}
