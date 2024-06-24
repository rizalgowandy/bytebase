/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { StringValue } from "../google/protobuf/wrappers";

export const protobufPackage = "bytebase.store";

/** DatabaseMetadata is the metadata for databases. */
export interface DatabaseMetadata {
  labels: { [key: string]: string };
  lastSyncTime: Date | undefined;
}

export interface DatabaseMetadata_LabelsEntry {
  key: string;
  value: string;
}

/** DatabaseSchemaMetadata is the schema metadata for databases. */
export interface DatabaseSchemaMetadata {
  name: string;
  /** The schemas is the list of schemas in a database. */
  schemas: SchemaMetadata[];
  /** The character_set is the character set of a database. */
  characterSet: string;
  /** The collation is the collation of a database. */
  collation: string;
  /** The extensions is the list of extensions in a database. */
  extensions: ExtensionMetadata[];
  /** The database belongs to a datashare. */
  datashare: boolean;
  /** The service name of the database. It's the Oracle specific concept. */
  serviceName: string;
  linkedDatabases: LinkedDatabaseMetadata[];
}

/**
 * SchemaMetadata is the metadata for schemas.
 * This is the concept of schema in Postgres, but it's a no-op for MySQL.
 */
export interface SchemaMetadata {
  /**
   * The name is the schema name.
   * It is an empty string for databases without such concept such as MySQL.
   */
  name: string;
  /** The tables is the list of tables in a schema. */
  tables: TableMetadata[];
  /** The external_tables is the list of external tables in a schema. */
  externalTables: ExternalTableMetadata[];
  /** The views is the list of views in a schema. */
  views: ViewMetadata[];
  /** The functions is the list of functions in a schema. */
  functions: FunctionMetadata[];
  /** The procedures is the list of procedures in a schema. */
  procedures: ProcedureMetadata[];
  /** The streams is the list of streams in a schema, currently, only used for Snowflake. */
  streams: StreamMetadata[];
  /** The routines is the list of routines in a schema, currently, only used for Snowflake. */
  tasks: TaskMetadata[];
  /** The materialized_views is the list of materialized views in a schema. */
  materializedViews: MaterializedViewMetadata[];
  /** The sequences is the list of sequences in a schema. */
  sequences: SequenceMetadata[];
}

export interface TaskMetadata {
  /** The name is the name of a task. */
  name: string;
  /**
   * The id is the snowflake-generated id of a task.
   * Example: 01ad32a0-1bb6-5e93-0000-000000000001
   */
  id: string;
  /** The owner of the task. */
  owner: string;
  /** The comment of the task. */
  comment: string;
  /** The warehouse of the task. */
  warehouse: string;
  /** The schedule interval of the task. */
  schedule: string;
  /** The predecessor tasks of the task. */
  predecessors: string[];
  /** The state of the task. */
  state: TaskMetadata_State;
  /** The condition of the task. */
  condition: string;
  /** The definition of the task. */
  definition: string;
}

export enum TaskMetadata_State {
  STATE_UNSPECIFIED = "STATE_UNSPECIFIED",
  STATE_STARTED = "STATE_STARTED",
  STATE_SUSPENDED = "STATE_SUSPENDED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function taskMetadata_StateFromJSON(object: any): TaskMetadata_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return TaskMetadata_State.STATE_UNSPECIFIED;
    case 1:
    case "STATE_STARTED":
      return TaskMetadata_State.STATE_STARTED;
    case 2:
    case "STATE_SUSPENDED":
      return TaskMetadata_State.STATE_SUSPENDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskMetadata_State.UNRECOGNIZED;
  }
}

export function taskMetadata_StateToJSON(object: TaskMetadata_State): string {
  switch (object) {
    case TaskMetadata_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case TaskMetadata_State.STATE_STARTED:
      return "STATE_STARTED";
    case TaskMetadata_State.STATE_SUSPENDED:
      return "STATE_SUSPENDED";
    case TaskMetadata_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function taskMetadata_StateToNumber(object: TaskMetadata_State): number {
  switch (object) {
    case TaskMetadata_State.STATE_UNSPECIFIED:
      return 0;
    case TaskMetadata_State.STATE_STARTED:
      return 1;
    case TaskMetadata_State.STATE_SUSPENDED:
      return 2;
    case TaskMetadata_State.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface StreamMetadata {
  /** The name is the name of a stream. */
  name: string;
  /** The table_name is the name of the table/view that the stream is created on. */
  tableName: string;
  /** The owner of the stream. */
  owner: string;
  /** The comment of the stream. */
  comment: string;
  /** The type of the stream. */
  type: StreamMetadata_Type;
  /** Indicates whether the stream was last read before the `stale_after` time. */
  stale: boolean;
  /** The mode of the stream. */
  mode: StreamMetadata_Mode;
  /** The definition of the stream. */
  definition: string;
}

export enum StreamMetadata_Type {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  TYPE_DELTA = "TYPE_DELTA",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function streamMetadata_TypeFromJSON(object: any): StreamMetadata_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return StreamMetadata_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_DELTA":
      return StreamMetadata_Type.TYPE_DELTA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamMetadata_Type.UNRECOGNIZED;
  }
}

export function streamMetadata_TypeToJSON(object: StreamMetadata_Type): string {
  switch (object) {
    case StreamMetadata_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case StreamMetadata_Type.TYPE_DELTA:
      return "TYPE_DELTA";
    case StreamMetadata_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function streamMetadata_TypeToNumber(object: StreamMetadata_Type): number {
  switch (object) {
    case StreamMetadata_Type.TYPE_UNSPECIFIED:
      return 0;
    case StreamMetadata_Type.TYPE_DELTA:
      return 1;
    case StreamMetadata_Type.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum StreamMetadata_Mode {
  MODE_UNSPECIFIED = "MODE_UNSPECIFIED",
  MODE_DEFAULT = "MODE_DEFAULT",
  MODE_APPEND_ONLY = "MODE_APPEND_ONLY",
  MODE_INSERT_ONLY = "MODE_INSERT_ONLY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function streamMetadata_ModeFromJSON(object: any): StreamMetadata_Mode {
  switch (object) {
    case 0:
    case "MODE_UNSPECIFIED":
      return StreamMetadata_Mode.MODE_UNSPECIFIED;
    case 1:
    case "MODE_DEFAULT":
      return StreamMetadata_Mode.MODE_DEFAULT;
    case 2:
    case "MODE_APPEND_ONLY":
      return StreamMetadata_Mode.MODE_APPEND_ONLY;
    case 3:
    case "MODE_INSERT_ONLY":
      return StreamMetadata_Mode.MODE_INSERT_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StreamMetadata_Mode.UNRECOGNIZED;
  }
}

export function streamMetadata_ModeToJSON(object: StreamMetadata_Mode): string {
  switch (object) {
    case StreamMetadata_Mode.MODE_UNSPECIFIED:
      return "MODE_UNSPECIFIED";
    case StreamMetadata_Mode.MODE_DEFAULT:
      return "MODE_DEFAULT";
    case StreamMetadata_Mode.MODE_APPEND_ONLY:
      return "MODE_APPEND_ONLY";
    case StreamMetadata_Mode.MODE_INSERT_ONLY:
      return "MODE_INSERT_ONLY";
    case StreamMetadata_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function streamMetadata_ModeToNumber(object: StreamMetadata_Mode): number {
  switch (object) {
    case StreamMetadata_Mode.MODE_UNSPECIFIED:
      return 0;
    case StreamMetadata_Mode.MODE_DEFAULT:
      return 1;
    case StreamMetadata_Mode.MODE_APPEND_ONLY:
      return 2;
    case StreamMetadata_Mode.MODE_INSERT_ONLY:
      return 3;
    case StreamMetadata_Mode.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** TableMetadata is the metadata for tables. */
export interface TableMetadata {
  /** The name is the name of a table. */
  name: string;
  /** The columns is the ordered list of columns in a table. */
  columns: ColumnMetadata[];
  /** The indexes is the list of indexes in a table. */
  indexes: IndexMetadata[];
  /** The engine is the engine of a table. */
  engine: string;
  /** The collation is the collation of a table. */
  collation: string;
  /** The row_count is the estimated number of rows of a table. */
  rowCount: Long;
  /** The data_size is the estimated data size of a table. */
  dataSize: Long;
  /** The index_size is the estimated index size of a table. */
  indexSize: Long;
  /** The data_free is the estimated free data size of a table. */
  dataFree: Long;
  /** The create_options is the create option of a table. */
  createOptions: string;
  /**
   * The comment is the comment of a table.
   * classification and user_comment is parsed from the comment.
   */
  comment: string;
  /** The user_comment is the user comment of a table parsed from the comment. */
  userComment: string;
  /** The foreign_keys is the list of foreign keys in a table. */
  foreignKeys: ForeignKeyMetadata[];
  /** The partitions is the list of partitions in a table. */
  partitions: TablePartitionMetadata[];
  /** The check_constraints is the list of check constraints in a table. */
  checkConstraints: CheckConstraintMetadata[];
}

export interface CheckConstraintMetadata {
  /** The name is the name of a check constraint. */
  name: string;
  /** The expression is the expression of a check constraint. */
  expression: string;
}

export interface ExternalTableMetadata {
  /** The name is the name of a external table. */
  name: string;
  /** The external_server_name is the name of the external server. */
  externalServerName: string;
  /** The external_database_name is the name of the external database. */
  externalDatabaseName: string;
  /** The columns is the ordered list of columns in a foreign table. */
  columns: ColumnMetadata[];
}

/** TablePartitionMetadata is the metadata for table partitions. */
export interface TablePartitionMetadata {
  /** The name is the name of a table partition. */
  name: string;
  /** The type of a table partition. */
  type: TablePartitionMetadata_Type;
  /**
   * The expression is the expression of a table partition.
   * For PostgreSQL, the expression is the text of {FOR VALUES partition_bound_spec}, see https://www.postgresql.org/docs/current/sql-createtable.html.
   * For MySQL, the expression is the `expr` or `column_list` of the following syntax.
   * PARTITION BY
   *    { [LINEAR] HASH(expr)
   *    | [LINEAR] KEY [ALGORITHM={1 | 2}] (column_list)
   *    | RANGE{(expr) | COLUMNS(column_list)}
   *    | LIST{(expr) | COLUMNS(column_list)} }.
   */
  expression: string;
  /**
   * The value is the value of a table partition.
   * For MySQL, the value is for RANGE and LIST partition types,
   * - For a RANGE partition, it contains the value set in the partition's VALUES LESS THAN clause, which can be either an integer or MAXVALUE.
   * - For a LIST partition, this column contains the values defined in the partition's VALUES IN clause, which is a list of comma-separated integer values.
   * - For others, it's an empty string.
   */
  value: string;
  /**
   * The use_default is whether the users use the default partition, it stores the different value for different database engines.
   * For MySQL, it's [INT] type, 0 means not use default partition, otherwise, it's equals to number in syntax [SUB]PARTITION {number}.
   */
  useDefault: string;
  /** The subpartitions is the list of subpartitions in a table partition. */
  subpartitions: TablePartitionMetadata[];
}

/**
 * Type is the type of a table partition, some database engines may not support all types.
 * Only avilable for the following database engines now:
 * MySQL: RANGE, RANGE COLUMNS, LIST, LIST COLUMNS, HASH, LINEAR HASH, KEY, LINEAR_KEY (https://dev.mysql.com/doc/refman/8.0/en/partitioning-types.html)
 * TiDB: RANGE, RANGE COLUMNS, LIST, LIST COLUMNS, HASH, KEY
 * PostgreSQL: RANGE, LIST, HASH (https://www.postgresql.org/docs/current/ddl-partitioning.html)
 */
export enum TablePartitionMetadata_Type {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  RANGE = "RANGE",
  RANGE_COLUMNS = "RANGE_COLUMNS",
  LIST = "LIST",
  LIST_COLUMNS = "LIST_COLUMNS",
  HASH = "HASH",
  LINEAR_HASH = "LINEAR_HASH",
  KEY = "KEY",
  LINEAR_KEY = "LINEAR_KEY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function tablePartitionMetadata_TypeFromJSON(object: any): TablePartitionMetadata_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return TablePartitionMetadata_Type.TYPE_UNSPECIFIED;
    case 1:
    case "RANGE":
      return TablePartitionMetadata_Type.RANGE;
    case 2:
    case "RANGE_COLUMNS":
      return TablePartitionMetadata_Type.RANGE_COLUMNS;
    case 3:
    case "LIST":
      return TablePartitionMetadata_Type.LIST;
    case 4:
    case "LIST_COLUMNS":
      return TablePartitionMetadata_Type.LIST_COLUMNS;
    case 5:
    case "HASH":
      return TablePartitionMetadata_Type.HASH;
    case 6:
    case "LINEAR_HASH":
      return TablePartitionMetadata_Type.LINEAR_HASH;
    case 7:
    case "KEY":
      return TablePartitionMetadata_Type.KEY;
    case 8:
    case "LINEAR_KEY":
      return TablePartitionMetadata_Type.LINEAR_KEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TablePartitionMetadata_Type.UNRECOGNIZED;
  }
}

export function tablePartitionMetadata_TypeToJSON(object: TablePartitionMetadata_Type): string {
  switch (object) {
    case TablePartitionMetadata_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case TablePartitionMetadata_Type.RANGE:
      return "RANGE";
    case TablePartitionMetadata_Type.RANGE_COLUMNS:
      return "RANGE_COLUMNS";
    case TablePartitionMetadata_Type.LIST:
      return "LIST";
    case TablePartitionMetadata_Type.LIST_COLUMNS:
      return "LIST_COLUMNS";
    case TablePartitionMetadata_Type.HASH:
      return "HASH";
    case TablePartitionMetadata_Type.LINEAR_HASH:
      return "LINEAR_HASH";
    case TablePartitionMetadata_Type.KEY:
      return "KEY";
    case TablePartitionMetadata_Type.LINEAR_KEY:
      return "LINEAR_KEY";
    case TablePartitionMetadata_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function tablePartitionMetadata_TypeToNumber(object: TablePartitionMetadata_Type): number {
  switch (object) {
    case TablePartitionMetadata_Type.TYPE_UNSPECIFIED:
      return 0;
    case TablePartitionMetadata_Type.RANGE:
      return 1;
    case TablePartitionMetadata_Type.RANGE_COLUMNS:
      return 2;
    case TablePartitionMetadata_Type.LIST:
      return 3;
    case TablePartitionMetadata_Type.LIST_COLUMNS:
      return 4;
    case TablePartitionMetadata_Type.HASH:
      return 5;
    case TablePartitionMetadata_Type.LINEAR_HASH:
      return 6;
    case TablePartitionMetadata_Type.KEY:
      return 7;
    case TablePartitionMetadata_Type.LINEAR_KEY:
      return 8;
    case TablePartitionMetadata_Type.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ColumnMetadata is the metadata for columns. */
export interface ColumnMetadata {
  /** The name is the name of a column. */
  name: string;
  /** The position is the position in columns. */
  position: number;
  /** The default is the default of a column. Use google.protobuf.StringValue to distinguish between an empty string default value or no default. */
  default?: string | undefined;
  defaultNull?: boolean | undefined;
  defaultExpression?:
    | string
    | undefined;
  /**
   * The on_update is the on update action of a column.
   * For MySQL like databases, it's only supported for TIMESTAMP columns with CURRENT_TIMESTAMP as on update value.
   */
  onUpdate: string;
  /** The nullable is the nullable of a column. */
  nullable: boolean;
  /** The type is the type of a column. */
  type: string;
  /** The character_set is the character_set of a column. */
  characterSet: string;
  /** The collation is the collation of a column. */
  collation: string;
  /**
   * The comment is the comment of a column.
   * classification and user_comment is parsed from the comment.
   */
  comment: string;
  /** The user_comment is the user comment of a table parsed from the comment. */
  userComment: string;
  /** The generation is for generated columns. */
  generation: GenerationMetadata | undefined;
}

export interface GenerationMetadata {
  type: GenerationMetadata_Type;
  expression: string;
}

export enum GenerationMetadata_Type {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  TYPE_VIRTUAL = "TYPE_VIRTUAL",
  TYPE_STORED = "TYPE_STORED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function generationMetadata_TypeFromJSON(object: any): GenerationMetadata_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return GenerationMetadata_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_VIRTUAL":
      return GenerationMetadata_Type.TYPE_VIRTUAL;
    case 2:
    case "TYPE_STORED":
      return GenerationMetadata_Type.TYPE_STORED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GenerationMetadata_Type.UNRECOGNIZED;
  }
}

export function generationMetadata_TypeToJSON(object: GenerationMetadata_Type): string {
  switch (object) {
    case GenerationMetadata_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case GenerationMetadata_Type.TYPE_VIRTUAL:
      return "TYPE_VIRTUAL";
    case GenerationMetadata_Type.TYPE_STORED:
      return "TYPE_STORED";
    case GenerationMetadata_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function generationMetadata_TypeToNumber(object: GenerationMetadata_Type): number {
  switch (object) {
    case GenerationMetadata_Type.TYPE_UNSPECIFIED:
      return 0;
    case GenerationMetadata_Type.TYPE_VIRTUAL:
      return 1;
    case GenerationMetadata_Type.TYPE_STORED:
      return 2;
    case GenerationMetadata_Type.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ViewMetadata is the metadata for views. */
export interface ViewMetadata {
  /** The name is the name of a view. */
  name: string;
  /** The definition is the definition of a view. */
  definition: string;
  /** The comment is the comment of a view. */
  comment: string;
  /** The dependent_columns is the list of dependent columns of a view. */
  dependentColumns: DependentColumn[];
}

/** DependentColumn is the metadata for dependent columns. */
export interface DependentColumn {
  /** The schema is the schema of a reference column. */
  schema: string;
  /** The table is the table of a reference column. */
  table: string;
  /** The column is the name of a reference column. */
  column: string;
}

/** MaterializedViewMetadata is the metadata for materialized views. */
export interface MaterializedViewMetadata {
  /** The name is the name of a view. */
  name: string;
  /** The definition is the definition of a view. */
  definition: string;
  /** The comment is the comment of a view. */
  comment: string;
  /** The dependent_columns is the list of dependent columns of a view. */
  dependentColumns: DependentColumn[];
}

/** FunctionMetadata is the metadata for functions. */
export interface FunctionMetadata {
  /** The name is the name of a function. */
  name: string;
  /** The definition is the definition of a function. */
  definition: string;
}

/** ProcedureMetadata is the metadata for procedures. */
export interface ProcedureMetadata {
  /** The name is the name of a procedure. */
  name: string;
  /** The definition is the definition of a procedure. */
  definition: string;
}

/** IndexMetadata is the metadata for indexes. */
export interface IndexMetadata {
  /** The name is the name of an index. */
  name: string;
  /**
   * The expressions are the ordered columns or expressions of an index.
   * This could refer to a column or an expression.
   */
  expressions: string[];
  /**
   * The key_lengths are the ordered key lengths of an index.
   * If the key length is not specified, it's -1.
   */
  keyLength: Long[];
  /** The descending is the ordered descending of an index. */
  descending: boolean[];
  /** The type is the type of an index. */
  type: string;
  /** The unique is whether the index is unique. */
  unique: boolean;
  /** The primary is whether the index is a primary key index. */
  primary: boolean;
  /** The visible is whether the index is visible. */
  visible: boolean;
  /** The comment is the comment of an index. */
  comment: string;
  /** The definition of an index. */
  definition: string;
}

/** ExtensionMetadata is the metadata for extensions. */
export interface ExtensionMetadata {
  /** The name is the name of an extension. */
  name: string;
  /** The schema is the extension that is installed to. But the extension usage is not limited to the schema. */
  schema: string;
  /** The version is the version of an extension. */
  version: string;
  /** The description is the description of an extension. */
  description: string;
}

/** ForeignKeyMetadata is the metadata for foreign keys. */
export interface ForeignKeyMetadata {
  /** The name is the name of a foreign key. */
  name: string;
  /** The columns are the ordered referencing columns of a foreign key. */
  columns: string[];
  /**
   * The referenced_schema is the referenced schema name of a foreign key.
   * It is an empty string for databases without such concept such as MySQL.
   */
  referencedSchema: string;
  /** The referenced_table is the referenced table name of a foreign key. */
  referencedTable: string;
  /** The referenced_columns are the ordered referenced columns of a foreign key. */
  referencedColumns: string[];
  /** The on_delete is the on delete action of a foreign key. */
  onDelete: string;
  /** The on_update is the on update action of a foreign key. */
  onUpdate: string;
  /**
   * The match_type is the match type of a foreign key.
   * The match_type is the PostgreSQL specific field.
   * It's empty string for other databases.
   */
  matchType: string;
}

/** InstanceRoleMetadata is the message for instance role. */
export interface InstanceRoleMetadata {
  /** The role name. It's unique within the instance. */
  name: string;
  /** The grant display string on the instance. It's generated by database engine. */
  grant: string;
}

export interface Secrets {
  /** The list of secrets. */
  items: SecretItem[];
}

export interface SecretItem {
  /** The name is the name of the secret. */
  name: string;
  /** The value is the value of the secret. */
  value: string;
  /** The description is the description of the secret. */
  description: string;
}

export interface DatabaseConfig {
  name: string;
  /** The schema_configs is the list of configs for schemas in a database. */
  schemaConfigs: SchemaConfig[];
}

export interface SchemaConfig {
  /**
   * The name is the schema name.
   * It is an empty string for databases without such concept such as MySQL.
   */
  name: string;
  /** The table_configs is the list of configs for tables in a schema. */
  tableConfigs: TableConfig[];
  functionConfigs: FunctionConfig[];
  procedureConfigs: ProcedureConfig[];
  viewConfigs: ViewConfig[];
}

export interface TableConfig {
  /** The name is the name of a table. */
  name: string;
  /** The column_configs is the ordered list of configs for columns in a table. */
  columnConfigs: ColumnConfig[];
  classificationId: string;
  /**
   * The last updater of the table in branch.
   * Format: users/{userUID}.
   */
  updater: string;
  /** The timestamp when the table is updated in branch. */
  updateTime: Date | undefined;
}

export interface FunctionConfig {
  /** The name is the name of a function. */
  name: string;
  /**
   * The last updater of the function in branch.
   * Format: users/{userUID}.
   */
  updater: string;
  /** The timestamp when the function is updated in branch. */
  updateTime: Date | undefined;
}

export interface ProcedureConfig {
  /** The name is the name of a procedure. */
  name: string;
  /**
   * The last updater of the procedure in branch.
   * Format: users/{userUID}.
   */
  updater: string;
  /** The timestamp when the procedure is updated in branch. */
  updateTime: Date | undefined;
}

export interface ViewConfig {
  /** The name is the name of a view. */
  name: string;
  /**
   * The last updater of the view in branch.
   * Format: users/{userUID}.
   */
  updater: string;
  /** The timestamp when the view is updated in branch. */
  updateTime: Date | undefined;
}

export interface ColumnConfig {
  /** The name is the name of a column. */
  name: string;
  semanticTypeId: string;
  /** The user labels for a column. */
  labels: { [key: string]: string };
  classificationId: string;
}

export interface ColumnConfig_LabelsEntry {
  key: string;
  value: string;
}

export interface LinkedDatabaseMetadata {
  name: string;
  username: string;
  host: string;
}

/** SequenceMetadata is the metadata for sequences. */
export interface SequenceMetadata {
  /** The name of a sequence. */
  name: string;
  /** The data type of a sequence. */
  dataType: string;
}

function createBaseDatabaseMetadata(): DatabaseMetadata {
  return { labels: {}, lastSyncTime: undefined };
}

export const DatabaseMetadata = {
  encode(message: DatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.labels).forEach(([key, value]) => {
      DatabaseMetadata_LabelsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.lastSyncTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastSyncTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = DatabaseMetadata_LabelsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.labels[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastSyncTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseMetadata {
    return {
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      lastSyncTime: isSet(object.lastSyncTime) ? fromJsonTimestamp(object.lastSyncTime) : undefined,
    };
  },

  toJSON(message: DatabaseMetadata): unknown {
    const obj: any = {};
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.lastSyncTime !== undefined) {
      obj.lastSyncTime = message.lastSyncTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<DatabaseMetadata>): DatabaseMetadata {
    return DatabaseMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabaseMetadata>): DatabaseMetadata {
    const message = createBaseDatabaseMetadata();
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.lastSyncTime = object.lastSyncTime ?? undefined;
    return message;
  },
};

function createBaseDatabaseMetadata_LabelsEntry(): DatabaseMetadata_LabelsEntry {
  return { key: "", value: "" };
}

export const DatabaseMetadata_LabelsEntry = {
  encode(message: DatabaseMetadata_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseMetadata_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseMetadata_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseMetadata_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: DatabaseMetadata_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<DatabaseMetadata_LabelsEntry>): DatabaseMetadata_LabelsEntry {
    return DatabaseMetadata_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabaseMetadata_LabelsEntry>): DatabaseMetadata_LabelsEntry {
    const message = createBaseDatabaseMetadata_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDatabaseSchemaMetadata(): DatabaseSchemaMetadata {
  return {
    name: "",
    schemas: [],
    characterSet: "",
    collation: "",
    extensions: [],
    datashare: false,
    serviceName: "",
    linkedDatabases: [],
  };
}

export const DatabaseSchemaMetadata = {
  encode(message: DatabaseSchemaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.schemas) {
      SchemaMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterSet !== "") {
      writer.uint32(26).string(message.characterSet);
    }
    if (message.collation !== "") {
      writer.uint32(34).string(message.collation);
    }
    for (const v of message.extensions) {
      ExtensionMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.datashare === true) {
      writer.uint32(48).bool(message.datashare);
    }
    if (message.serviceName !== "") {
      writer.uint32(58).string(message.serviceName);
    }
    for (const v of message.linkedDatabases) {
      LinkedDatabaseMetadata.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseSchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseSchemaMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schemas.push(SchemaMetadata.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterSet = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.collation = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extensions.push(ExtensionMetadata.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.datashare = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.linkedDatabases.push(LinkedDatabaseMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseSchemaMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      schemas: globalThis.Array.isArray(object?.schemas)
        ? object.schemas.map((e: any) => SchemaMetadata.fromJSON(e))
        : [],
      characterSet: isSet(object.characterSet) ? globalThis.String(object.characterSet) : "",
      collation: isSet(object.collation) ? globalThis.String(object.collation) : "",
      extensions: globalThis.Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => ExtensionMetadata.fromJSON(e))
        : [],
      datashare: isSet(object.datashare) ? globalThis.Boolean(object.datashare) : false,
      serviceName: isSet(object.serviceName) ? globalThis.String(object.serviceName) : "",
      linkedDatabases: globalThis.Array.isArray(object?.linkedDatabases)
        ? object.linkedDatabases.map((e: any) => LinkedDatabaseMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DatabaseSchemaMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.schemas?.length) {
      obj.schemas = message.schemas.map((e) => SchemaMetadata.toJSON(e));
    }
    if (message.characterSet !== "") {
      obj.characterSet = message.characterSet;
    }
    if (message.collation !== "") {
      obj.collation = message.collation;
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => ExtensionMetadata.toJSON(e));
    }
    if (message.datashare === true) {
      obj.datashare = message.datashare;
    }
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    if (message.linkedDatabases?.length) {
      obj.linkedDatabases = message.linkedDatabases.map((e) => LinkedDatabaseMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DatabaseSchemaMetadata>): DatabaseSchemaMetadata {
    return DatabaseSchemaMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabaseSchemaMetadata>): DatabaseSchemaMetadata {
    const message = createBaseDatabaseSchemaMetadata();
    message.name = object.name ?? "";
    message.schemas = object.schemas?.map((e) => SchemaMetadata.fromPartial(e)) || [];
    message.characterSet = object.characterSet ?? "";
    message.collation = object.collation ?? "";
    message.extensions = object.extensions?.map((e) => ExtensionMetadata.fromPartial(e)) || [];
    message.datashare = object.datashare ?? false;
    message.serviceName = object.serviceName ?? "";
    message.linkedDatabases = object.linkedDatabases?.map((e) => LinkedDatabaseMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSchemaMetadata(): SchemaMetadata {
  return {
    name: "",
    tables: [],
    externalTables: [],
    views: [],
    functions: [],
    procedures: [],
    streams: [],
    tasks: [],
    materializedViews: [],
    sequences: [],
  };
}

export const SchemaMetadata = {
  encode(message: SchemaMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.tables) {
      TableMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.externalTables) {
      ExternalTableMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.views) {
      ViewMetadata.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.functions) {
      FunctionMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.procedures) {
      ProcedureMetadata.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.streams) {
      StreamMetadata.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.tasks) {
      TaskMetadata.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.materializedViews) {
      MaterializedViewMetadata.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.sequences) {
      SequenceMetadata.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tables.push(TableMetadata.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalTables.push(ExternalTableMetadata.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.views.push(ViewMetadata.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.functions.push(FunctionMetadata.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.procedures.push(ProcedureMetadata.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.streams.push(StreamMetadata.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tasks.push(TaskMetadata.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.materializedViews.push(MaterializedViewMetadata.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sequences.push(SequenceMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tables: globalThis.Array.isArray(object?.tables) ? object.tables.map((e: any) => TableMetadata.fromJSON(e)) : [],
      externalTables: globalThis.Array.isArray(object?.externalTables)
        ? object.externalTables.map((e: any) => ExternalTableMetadata.fromJSON(e))
        : [],
      views: globalThis.Array.isArray(object?.views) ? object.views.map((e: any) => ViewMetadata.fromJSON(e)) : [],
      functions: globalThis.Array.isArray(object?.functions)
        ? object.functions.map((e: any) => FunctionMetadata.fromJSON(e))
        : [],
      procedures: globalThis.Array.isArray(object?.procedures)
        ? object.procedures.map((e: any) => ProcedureMetadata.fromJSON(e))
        : [],
      streams: globalThis.Array.isArray(object?.streams)
        ? object.streams.map((e: any) => StreamMetadata.fromJSON(e))
        : [],
      tasks: globalThis.Array.isArray(object?.tasks) ? object.tasks.map((e: any) => TaskMetadata.fromJSON(e)) : [],
      materializedViews: globalThis.Array.isArray(object?.materializedViews)
        ? object.materializedViews.map((e: any) => MaterializedViewMetadata.fromJSON(e))
        : [],
      sequences: globalThis.Array.isArray(object?.sequences)
        ? object.sequences.map((e: any) => SequenceMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SchemaMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tables?.length) {
      obj.tables = message.tables.map((e) => TableMetadata.toJSON(e));
    }
    if (message.externalTables?.length) {
      obj.externalTables = message.externalTables.map((e) => ExternalTableMetadata.toJSON(e));
    }
    if (message.views?.length) {
      obj.views = message.views.map((e) => ViewMetadata.toJSON(e));
    }
    if (message.functions?.length) {
      obj.functions = message.functions.map((e) => FunctionMetadata.toJSON(e));
    }
    if (message.procedures?.length) {
      obj.procedures = message.procedures.map((e) => ProcedureMetadata.toJSON(e));
    }
    if (message.streams?.length) {
      obj.streams = message.streams.map((e) => StreamMetadata.toJSON(e));
    }
    if (message.tasks?.length) {
      obj.tasks = message.tasks.map((e) => TaskMetadata.toJSON(e));
    }
    if (message.materializedViews?.length) {
      obj.materializedViews = message.materializedViews.map((e) => MaterializedViewMetadata.toJSON(e));
    }
    if (message.sequences?.length) {
      obj.sequences = message.sequences.map((e) => SequenceMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaMetadata>): SchemaMetadata {
    return SchemaMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaMetadata>): SchemaMetadata {
    const message = createBaseSchemaMetadata();
    message.name = object.name ?? "";
    message.tables = object.tables?.map((e) => TableMetadata.fromPartial(e)) || [];
    message.externalTables = object.externalTables?.map((e) => ExternalTableMetadata.fromPartial(e)) || [];
    message.views = object.views?.map((e) => ViewMetadata.fromPartial(e)) || [];
    message.functions = object.functions?.map((e) => FunctionMetadata.fromPartial(e)) || [];
    message.procedures = object.procedures?.map((e) => ProcedureMetadata.fromPartial(e)) || [];
    message.streams = object.streams?.map((e) => StreamMetadata.fromPartial(e)) || [];
    message.tasks = object.tasks?.map((e) => TaskMetadata.fromPartial(e)) || [];
    message.materializedViews = object.materializedViews?.map((e) => MaterializedViewMetadata.fromPartial(e)) || [];
    message.sequences = object.sequences?.map((e) => SequenceMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTaskMetadata(): TaskMetadata {
  return {
    name: "",
    id: "",
    owner: "",
    comment: "",
    warehouse: "",
    schedule: "",
    predecessors: [],
    state: TaskMetadata_State.STATE_UNSPECIFIED,
    condition: "",
    definition: "",
  };
}

export const TaskMetadata = {
  encode(message: TaskMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.comment !== "") {
      writer.uint32(34).string(message.comment);
    }
    if (message.warehouse !== "") {
      writer.uint32(42).string(message.warehouse);
    }
    if (message.schedule !== "") {
      writer.uint32(50).string(message.schedule);
    }
    for (const v of message.predecessors) {
      writer.uint32(58).string(v!);
    }
    if (message.state !== TaskMetadata_State.STATE_UNSPECIFIED) {
      writer.uint32(64).int32(taskMetadata_StateToNumber(message.state));
    }
    if (message.condition !== "") {
      writer.uint32(74).string(message.condition);
    }
    if (message.definition !== "") {
      writer.uint32(82).string(message.definition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.warehouse = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.schedule = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.predecessors.push(reader.string());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.state = taskMetadata_StateFromJSON(reader.int32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.condition = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.definition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      warehouse: isSet(object.warehouse) ? globalThis.String(object.warehouse) : "",
      schedule: isSet(object.schedule) ? globalThis.String(object.schedule) : "",
      predecessors: globalThis.Array.isArray(object?.predecessors)
        ? object.predecessors.map((e: any) => globalThis.String(e))
        : [],
      state: isSet(object.state) ? taskMetadata_StateFromJSON(object.state) : TaskMetadata_State.STATE_UNSPECIFIED,
      condition: isSet(object.condition) ? globalThis.String(object.condition) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
    };
  },

  toJSON(message: TaskMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.warehouse !== "") {
      obj.warehouse = message.warehouse;
    }
    if (message.schedule !== "") {
      obj.schedule = message.schedule;
    }
    if (message.predecessors?.length) {
      obj.predecessors = message.predecessors;
    }
    if (message.state !== TaskMetadata_State.STATE_UNSPECIFIED) {
      obj.state = taskMetadata_StateToJSON(message.state);
    }
    if (message.condition !== "") {
      obj.condition = message.condition;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    return obj;
  },

  create(base?: DeepPartial<TaskMetadata>): TaskMetadata {
    return TaskMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskMetadata>): TaskMetadata {
    const message = createBaseTaskMetadata();
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.comment = object.comment ?? "";
    message.warehouse = object.warehouse ?? "";
    message.schedule = object.schedule ?? "";
    message.predecessors = object.predecessors?.map((e) => e) || [];
    message.state = object.state ?? TaskMetadata_State.STATE_UNSPECIFIED;
    message.condition = object.condition ?? "";
    message.definition = object.definition ?? "";
    return message;
  },
};

function createBaseStreamMetadata(): StreamMetadata {
  return {
    name: "",
    tableName: "",
    owner: "",
    comment: "",
    type: StreamMetadata_Type.TYPE_UNSPECIFIED,
    stale: false,
    mode: StreamMetadata_Mode.MODE_UNSPECIFIED,
    definition: "",
  };
}

export const StreamMetadata = {
  encode(message: StreamMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tableName !== "") {
      writer.uint32(18).string(message.tableName);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.comment !== "") {
      writer.uint32(34).string(message.comment);
    }
    if (message.type !== StreamMetadata_Type.TYPE_UNSPECIFIED) {
      writer.uint32(40).int32(streamMetadata_TypeToNumber(message.type));
    }
    if (message.stale === true) {
      writer.uint32(48).bool(message.stale);
    }
    if (message.mode !== StreamMetadata_Mode.MODE_UNSPECIFIED) {
      writer.uint32(56).int32(streamMetadata_ModeToNumber(message.mode));
    }
    if (message.definition !== "") {
      writer.uint32(66).string(message.definition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tableName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = streamMetadata_TypeFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.stale = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.mode = streamMetadata_ModeFromJSON(reader.int32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.definition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tableName: isSet(object.tableName) ? globalThis.String(object.tableName) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      type: isSet(object.type) ? streamMetadata_TypeFromJSON(object.type) : StreamMetadata_Type.TYPE_UNSPECIFIED,
      stale: isSet(object.stale) ? globalThis.Boolean(object.stale) : false,
      mode: isSet(object.mode) ? streamMetadata_ModeFromJSON(object.mode) : StreamMetadata_Mode.MODE_UNSPECIFIED,
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
    };
  },

  toJSON(message: StreamMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.type !== StreamMetadata_Type.TYPE_UNSPECIFIED) {
      obj.type = streamMetadata_TypeToJSON(message.type);
    }
    if (message.stale === true) {
      obj.stale = message.stale;
    }
    if (message.mode !== StreamMetadata_Mode.MODE_UNSPECIFIED) {
      obj.mode = streamMetadata_ModeToJSON(message.mode);
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    return obj;
  },

  create(base?: DeepPartial<StreamMetadata>): StreamMetadata {
    return StreamMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamMetadata>): StreamMetadata {
    const message = createBaseStreamMetadata();
    message.name = object.name ?? "";
    message.tableName = object.tableName ?? "";
    message.owner = object.owner ?? "";
    message.comment = object.comment ?? "";
    message.type = object.type ?? StreamMetadata_Type.TYPE_UNSPECIFIED;
    message.stale = object.stale ?? false;
    message.mode = object.mode ?? StreamMetadata_Mode.MODE_UNSPECIFIED;
    message.definition = object.definition ?? "";
    return message;
  },
};

function createBaseTableMetadata(): TableMetadata {
  return {
    name: "",
    columns: [],
    indexes: [],
    engine: "",
    collation: "",
    rowCount: Long.ZERO,
    dataSize: Long.ZERO,
    indexSize: Long.ZERO,
    dataFree: Long.ZERO,
    createOptions: "",
    comment: "",
    userComment: "",
    foreignKeys: [],
    partitions: [],
    checkConstraints: [],
  };
}

export const TableMetadata = {
  encode(message: TableMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.columns) {
      ColumnMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.indexes) {
      IndexMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.engine !== "") {
      writer.uint32(34).string(message.engine);
    }
    if (message.collation !== "") {
      writer.uint32(42).string(message.collation);
    }
    if (!message.rowCount.isZero()) {
      writer.uint32(48).int64(message.rowCount);
    }
    if (!message.dataSize.isZero()) {
      writer.uint32(56).int64(message.dataSize);
    }
    if (!message.indexSize.isZero()) {
      writer.uint32(64).int64(message.indexSize);
    }
    if (!message.dataFree.isZero()) {
      writer.uint32(72).int64(message.dataFree);
    }
    if (message.createOptions !== "") {
      writer.uint32(82).string(message.createOptions);
    }
    if (message.comment !== "") {
      writer.uint32(90).string(message.comment);
    }
    if (message.userComment !== "") {
      writer.uint32(114).string(message.userComment);
    }
    for (const v of message.foreignKeys) {
      ForeignKeyMetadata.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.partitions) {
      TablePartitionMetadata.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.checkConstraints) {
      CheckConstraintMetadata.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columns.push(ColumnMetadata.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexes.push(IndexMetadata.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.engine = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collation = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.rowCount = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.dataSize = reader.int64() as Long;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.indexSize = reader.int64() as Long;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.dataFree = reader.int64() as Long;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.createOptions = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.userComment = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.foreignKeys.push(ForeignKeyMetadata.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.partitions.push(TablePartitionMetadata.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.checkConstraints.push(CheckConstraintMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TableMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      columns: globalThis.Array.isArray(object?.columns)
        ? object.columns.map((e: any) => ColumnMetadata.fromJSON(e))
        : [],
      indexes: globalThis.Array.isArray(object?.indexes)
        ? object.indexes.map((e: any) => IndexMetadata.fromJSON(e))
        : [],
      engine: isSet(object.engine) ? globalThis.String(object.engine) : "",
      collation: isSet(object.collation) ? globalThis.String(object.collation) : "",
      rowCount: isSet(object.rowCount) ? Long.fromValue(object.rowCount) : Long.ZERO,
      dataSize: isSet(object.dataSize) ? Long.fromValue(object.dataSize) : Long.ZERO,
      indexSize: isSet(object.indexSize) ? Long.fromValue(object.indexSize) : Long.ZERO,
      dataFree: isSet(object.dataFree) ? Long.fromValue(object.dataFree) : Long.ZERO,
      createOptions: isSet(object.createOptions) ? globalThis.String(object.createOptions) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      userComment: isSet(object.userComment) ? globalThis.String(object.userComment) : "",
      foreignKeys: globalThis.Array.isArray(object?.foreignKeys)
        ? object.foreignKeys.map((e: any) => ForeignKeyMetadata.fromJSON(e))
        : [],
      partitions: globalThis.Array.isArray(object?.partitions)
        ? object.partitions.map((e: any) => TablePartitionMetadata.fromJSON(e))
        : [],
      checkConstraints: globalThis.Array.isArray(object?.checkConstraints)
        ? object.checkConstraints.map((e: any) => CheckConstraintMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TableMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => ColumnMetadata.toJSON(e));
    }
    if (message.indexes?.length) {
      obj.indexes = message.indexes.map((e) => IndexMetadata.toJSON(e));
    }
    if (message.engine !== "") {
      obj.engine = message.engine;
    }
    if (message.collation !== "") {
      obj.collation = message.collation;
    }
    if (!message.rowCount.isZero()) {
      obj.rowCount = (message.rowCount || Long.ZERO).toString();
    }
    if (!message.dataSize.isZero()) {
      obj.dataSize = (message.dataSize || Long.ZERO).toString();
    }
    if (!message.indexSize.isZero()) {
      obj.indexSize = (message.indexSize || Long.ZERO).toString();
    }
    if (!message.dataFree.isZero()) {
      obj.dataFree = (message.dataFree || Long.ZERO).toString();
    }
    if (message.createOptions !== "") {
      obj.createOptions = message.createOptions;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.userComment !== "") {
      obj.userComment = message.userComment;
    }
    if (message.foreignKeys?.length) {
      obj.foreignKeys = message.foreignKeys.map((e) => ForeignKeyMetadata.toJSON(e));
    }
    if (message.partitions?.length) {
      obj.partitions = message.partitions.map((e) => TablePartitionMetadata.toJSON(e));
    }
    if (message.checkConstraints?.length) {
      obj.checkConstraints = message.checkConstraints.map((e) => CheckConstraintMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TableMetadata>): TableMetadata {
    return TableMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TableMetadata>): TableMetadata {
    const message = createBaseTableMetadata();
    message.name = object.name ?? "";
    message.columns = object.columns?.map((e) => ColumnMetadata.fromPartial(e)) || [];
    message.indexes = object.indexes?.map((e) => IndexMetadata.fromPartial(e)) || [];
    message.engine = object.engine ?? "";
    message.collation = object.collation ?? "";
    message.rowCount = (object.rowCount !== undefined && object.rowCount !== null)
      ? Long.fromValue(object.rowCount)
      : Long.ZERO;
    message.dataSize = (object.dataSize !== undefined && object.dataSize !== null)
      ? Long.fromValue(object.dataSize)
      : Long.ZERO;
    message.indexSize = (object.indexSize !== undefined && object.indexSize !== null)
      ? Long.fromValue(object.indexSize)
      : Long.ZERO;
    message.dataFree = (object.dataFree !== undefined && object.dataFree !== null)
      ? Long.fromValue(object.dataFree)
      : Long.ZERO;
    message.createOptions = object.createOptions ?? "";
    message.comment = object.comment ?? "";
    message.userComment = object.userComment ?? "";
    message.foreignKeys = object.foreignKeys?.map((e) => ForeignKeyMetadata.fromPartial(e)) || [];
    message.partitions = object.partitions?.map((e) => TablePartitionMetadata.fromPartial(e)) || [];
    message.checkConstraints = object.checkConstraints?.map((e) => CheckConstraintMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCheckConstraintMetadata(): CheckConstraintMetadata {
  return { name: "", expression: "" };
}

export const CheckConstraintMetadata = {
  encode(message: CheckConstraintMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.expression !== "") {
      writer.uint32(18).string(message.expression);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckConstraintMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckConstraintMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expression = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckConstraintMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      expression: isSet(object.expression) ? globalThis.String(object.expression) : "",
    };
  },

  toJSON(message: CheckConstraintMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    return obj;
  },

  create(base?: DeepPartial<CheckConstraintMetadata>): CheckConstraintMetadata {
    return CheckConstraintMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CheckConstraintMetadata>): CheckConstraintMetadata {
    const message = createBaseCheckConstraintMetadata();
    message.name = object.name ?? "";
    message.expression = object.expression ?? "";
    return message;
  },
};

function createBaseExternalTableMetadata(): ExternalTableMetadata {
  return { name: "", externalServerName: "", externalDatabaseName: "", columns: [] };
}

export const ExternalTableMetadata = {
  encode(message: ExternalTableMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.externalServerName !== "") {
      writer.uint32(18).string(message.externalServerName);
    }
    if (message.externalDatabaseName !== "") {
      writer.uint32(26).string(message.externalDatabaseName);
    }
    for (const v of message.columns) {
      ColumnMetadata.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalTableMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalTableMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.externalServerName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalDatabaseName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.columns.push(ColumnMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalTableMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      externalServerName: isSet(object.externalServerName) ? globalThis.String(object.externalServerName) : "",
      externalDatabaseName: isSet(object.externalDatabaseName) ? globalThis.String(object.externalDatabaseName) : "",
      columns: globalThis.Array.isArray(object?.columns)
        ? object.columns.map((e: any) => ColumnMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExternalTableMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.externalServerName !== "") {
      obj.externalServerName = message.externalServerName;
    }
    if (message.externalDatabaseName !== "") {
      obj.externalDatabaseName = message.externalDatabaseName;
    }
    if (message.columns?.length) {
      obj.columns = message.columns.map((e) => ColumnMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ExternalTableMetadata>): ExternalTableMetadata {
    return ExternalTableMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExternalTableMetadata>): ExternalTableMetadata {
    const message = createBaseExternalTableMetadata();
    message.name = object.name ?? "";
    message.externalServerName = object.externalServerName ?? "";
    message.externalDatabaseName = object.externalDatabaseName ?? "";
    message.columns = object.columns?.map((e) => ColumnMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTablePartitionMetadata(): TablePartitionMetadata {
  return {
    name: "",
    type: TablePartitionMetadata_Type.TYPE_UNSPECIFIED,
    expression: "",
    value: "",
    useDefault: "",
    subpartitions: [],
  };
}

export const TablePartitionMetadata = {
  encode(message: TablePartitionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== TablePartitionMetadata_Type.TYPE_UNSPECIFIED) {
      writer.uint32(16).int32(tablePartitionMetadata_TypeToNumber(message.type));
    }
    if (message.expression !== "") {
      writer.uint32(26).string(message.expression);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    if (message.useDefault !== "") {
      writer.uint32(42).string(message.useDefault);
    }
    for (const v of message.subpartitions) {
      TablePartitionMetadata.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TablePartitionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTablePartitionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = tablePartitionMetadata_TypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expression = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.useDefault = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.subpartitions.push(TablePartitionMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TablePartitionMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type)
        ? tablePartitionMetadata_TypeFromJSON(object.type)
        : TablePartitionMetadata_Type.TYPE_UNSPECIFIED,
      expression: isSet(object.expression) ? globalThis.String(object.expression) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      useDefault: isSet(object.useDefault) ? globalThis.String(object.useDefault) : "",
      subpartitions: globalThis.Array.isArray(object?.subpartitions)
        ? object.subpartitions.map((e: any) => TablePartitionMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TablePartitionMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== TablePartitionMetadata_Type.TYPE_UNSPECIFIED) {
      obj.type = tablePartitionMetadata_TypeToJSON(message.type);
    }
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.useDefault !== "") {
      obj.useDefault = message.useDefault;
    }
    if (message.subpartitions?.length) {
      obj.subpartitions = message.subpartitions.map((e) => TablePartitionMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TablePartitionMetadata>): TablePartitionMetadata {
    return TablePartitionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TablePartitionMetadata>): TablePartitionMetadata {
    const message = createBaseTablePartitionMetadata();
    message.name = object.name ?? "";
    message.type = object.type ?? TablePartitionMetadata_Type.TYPE_UNSPECIFIED;
    message.expression = object.expression ?? "";
    message.value = object.value ?? "";
    message.useDefault = object.useDefault ?? "";
    message.subpartitions = object.subpartitions?.map((e) => TablePartitionMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseColumnMetadata(): ColumnMetadata {
  return {
    name: "",
    position: 0,
    default: undefined,
    defaultNull: undefined,
    defaultExpression: undefined,
    onUpdate: "",
    nullable: false,
    type: "",
    characterSet: "",
    collation: "",
    comment: "",
    userComment: "",
    generation: undefined,
  };
}

export const ColumnMetadata = {
  encode(message: ColumnMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.position !== 0) {
      writer.uint32(16).int32(message.position);
    }
    if (message.default !== undefined) {
      StringValue.encode({ value: message.default! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.defaultNull !== undefined) {
      writer.uint32(32).bool(message.defaultNull);
    }
    if (message.defaultExpression !== undefined) {
      writer.uint32(42).string(message.defaultExpression);
    }
    if (message.onUpdate !== "") {
      writer.uint32(106).string(message.onUpdate);
    }
    if (message.nullable === true) {
      writer.uint32(48).bool(message.nullable);
    }
    if (message.type !== "") {
      writer.uint32(58).string(message.type);
    }
    if (message.characterSet !== "") {
      writer.uint32(66).string(message.characterSet);
    }
    if (message.collation !== "") {
      writer.uint32(74).string(message.collation);
    }
    if (message.comment !== "") {
      writer.uint32(82).string(message.comment);
    }
    if (message.userComment !== "") {
      writer.uint32(98).string(message.userComment);
    }
    if (message.generation !== undefined) {
      GenerationMetadata.encode(message.generation, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColumnMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.position = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.default = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.defaultNull = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultExpression = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.onUpdate = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.nullable = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.type = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.characterSet = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.collation = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.userComment = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.generation = GenerationMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      position: isSet(object.position) ? globalThis.Number(object.position) : 0,
      default: isSet(object.default) ? String(object.default) : undefined,
      defaultNull: isSet(object.defaultNull) ? globalThis.Boolean(object.defaultNull) : undefined,
      defaultExpression: isSet(object.defaultExpression) ? globalThis.String(object.defaultExpression) : undefined,
      onUpdate: isSet(object.onUpdate) ? globalThis.String(object.onUpdate) : "",
      nullable: isSet(object.nullable) ? globalThis.Boolean(object.nullable) : false,
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      characterSet: isSet(object.characterSet) ? globalThis.String(object.characterSet) : "",
      collation: isSet(object.collation) ? globalThis.String(object.collation) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      userComment: isSet(object.userComment) ? globalThis.String(object.userComment) : "",
      generation: isSet(object.generation) ? GenerationMetadata.fromJSON(object.generation) : undefined,
    };
  },

  toJSON(message: ColumnMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.position !== 0) {
      obj.position = Math.round(message.position);
    }
    if (message.default !== undefined) {
      obj.default = message.default;
    }
    if (message.defaultNull !== undefined) {
      obj.defaultNull = message.defaultNull;
    }
    if (message.defaultExpression !== undefined) {
      obj.defaultExpression = message.defaultExpression;
    }
    if (message.onUpdate !== "") {
      obj.onUpdate = message.onUpdate;
    }
    if (message.nullable === true) {
      obj.nullable = message.nullable;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.characterSet !== "") {
      obj.characterSet = message.characterSet;
    }
    if (message.collation !== "") {
      obj.collation = message.collation;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.userComment !== "") {
      obj.userComment = message.userComment;
    }
    if (message.generation !== undefined) {
      obj.generation = GenerationMetadata.toJSON(message.generation);
    }
    return obj;
  },

  create(base?: DeepPartial<ColumnMetadata>): ColumnMetadata {
    return ColumnMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ColumnMetadata>): ColumnMetadata {
    const message = createBaseColumnMetadata();
    message.name = object.name ?? "";
    message.position = object.position ?? 0;
    message.default = object.default ?? undefined;
    message.defaultNull = object.defaultNull ?? undefined;
    message.defaultExpression = object.defaultExpression ?? undefined;
    message.onUpdate = object.onUpdate ?? "";
    message.nullable = object.nullable ?? false;
    message.type = object.type ?? "";
    message.characterSet = object.characterSet ?? "";
    message.collation = object.collation ?? "";
    message.comment = object.comment ?? "";
    message.userComment = object.userComment ?? "";
    message.generation = (object.generation !== undefined && object.generation !== null)
      ? GenerationMetadata.fromPartial(object.generation)
      : undefined;
    return message;
  },
};

function createBaseGenerationMetadata(): GenerationMetadata {
  return { type: GenerationMetadata_Type.TYPE_UNSPECIFIED, expression: "" };
}

export const GenerationMetadata = {
  encode(message: GenerationMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== GenerationMetadata_Type.TYPE_UNSPECIFIED) {
      writer.uint32(8).int32(generationMetadata_TypeToNumber(message.type));
    }
    if (message.expression !== "") {
      writer.uint32(18).string(message.expression);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerationMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = generationMetadata_TypeFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expression = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerationMetadata {
    return {
      type: isSet(object.type)
        ? generationMetadata_TypeFromJSON(object.type)
        : GenerationMetadata_Type.TYPE_UNSPECIFIED,
      expression: isSet(object.expression) ? globalThis.String(object.expression) : "",
    };
  },

  toJSON(message: GenerationMetadata): unknown {
    const obj: any = {};
    if (message.type !== GenerationMetadata_Type.TYPE_UNSPECIFIED) {
      obj.type = generationMetadata_TypeToJSON(message.type);
    }
    if (message.expression !== "") {
      obj.expression = message.expression;
    }
    return obj;
  },

  create(base?: DeepPartial<GenerationMetadata>): GenerationMetadata {
    return GenerationMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerationMetadata>): GenerationMetadata {
    const message = createBaseGenerationMetadata();
    message.type = object.type ?? GenerationMetadata_Type.TYPE_UNSPECIFIED;
    message.expression = object.expression ?? "";
    return message;
  },
};

function createBaseViewMetadata(): ViewMetadata {
  return { name: "", definition: "", comment: "", dependentColumns: [] };
}

export const ViewMetadata = {
  encode(message: ViewMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.definition !== "") {
      writer.uint32(18).string(message.definition);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    for (const v of message.dependentColumns) {
      DependentColumn.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ViewMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseViewMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.definition = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dependentColumns.push(DependentColumn.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ViewMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      dependentColumns: globalThis.Array.isArray(object?.dependentColumns)
        ? object.dependentColumns.map((e: any) => DependentColumn.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ViewMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.dependentColumns?.length) {
      obj.dependentColumns = message.dependentColumns.map((e) => DependentColumn.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ViewMetadata>): ViewMetadata {
    return ViewMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ViewMetadata>): ViewMetadata {
    const message = createBaseViewMetadata();
    message.name = object.name ?? "";
    message.definition = object.definition ?? "";
    message.comment = object.comment ?? "";
    message.dependentColumns = object.dependentColumns?.map((e) => DependentColumn.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDependentColumn(): DependentColumn {
  return { schema: "", table: "", column: "" };
}

export const DependentColumn = {
  encode(message: DependentColumn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    if (message.column !== "") {
      writer.uint32(26).string(message.column);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DependentColumn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDependentColumn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.table = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.column = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DependentColumn {
    return {
      schema: isSet(object.schema) ? globalThis.String(object.schema) : "",
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      column: isSet(object.column) ? globalThis.String(object.column) : "",
    };
  },

  toJSON(message: DependentColumn): unknown {
    const obj: any = {};
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    return obj;
  },

  create(base?: DeepPartial<DependentColumn>): DependentColumn {
    return DependentColumn.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DependentColumn>): DependentColumn {
    const message = createBaseDependentColumn();
    message.schema = object.schema ?? "";
    message.table = object.table ?? "";
    message.column = object.column ?? "";
    return message;
  },
};

function createBaseMaterializedViewMetadata(): MaterializedViewMetadata {
  return { name: "", definition: "", comment: "", dependentColumns: [] };
}

export const MaterializedViewMetadata = {
  encode(message: MaterializedViewMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.definition !== "") {
      writer.uint32(18).string(message.definition);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    for (const v of message.dependentColumns) {
      DependentColumn.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaterializedViewMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaterializedViewMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.definition = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dependentColumns.push(DependentColumn.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaterializedViewMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      dependentColumns: globalThis.Array.isArray(object?.dependentColumns)
        ? object.dependentColumns.map((e: any) => DependentColumn.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MaterializedViewMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.dependentColumns?.length) {
      obj.dependentColumns = message.dependentColumns.map((e) => DependentColumn.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MaterializedViewMetadata>): MaterializedViewMetadata {
    return MaterializedViewMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaterializedViewMetadata>): MaterializedViewMetadata {
    const message = createBaseMaterializedViewMetadata();
    message.name = object.name ?? "";
    message.definition = object.definition ?? "";
    message.comment = object.comment ?? "";
    message.dependentColumns = object.dependentColumns?.map((e) => DependentColumn.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFunctionMetadata(): FunctionMetadata {
  return { name: "", definition: "" };
}

export const FunctionMetadata = {
  encode(message: FunctionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.definition !== "") {
      writer.uint32(18).string(message.definition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FunctionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.definition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FunctionMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
    };
  },

  toJSON(message: FunctionMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    return obj;
  },

  create(base?: DeepPartial<FunctionMetadata>): FunctionMetadata {
    return FunctionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FunctionMetadata>): FunctionMetadata {
    const message = createBaseFunctionMetadata();
    message.name = object.name ?? "";
    message.definition = object.definition ?? "";
    return message;
  },
};

function createBaseProcedureMetadata(): ProcedureMetadata {
  return { name: "", definition: "" };
}

export const ProcedureMetadata = {
  encode(message: ProcedureMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.definition !== "") {
      writer.uint32(18).string(message.definition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcedureMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.definition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProcedureMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
    };
  },

  toJSON(message: ProcedureMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    return obj;
  },

  create(base?: DeepPartial<ProcedureMetadata>): ProcedureMetadata {
    return ProcedureMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProcedureMetadata>): ProcedureMetadata {
    const message = createBaseProcedureMetadata();
    message.name = object.name ?? "";
    message.definition = object.definition ?? "";
    return message;
  },
};

function createBaseIndexMetadata(): IndexMetadata {
  return {
    name: "",
    expressions: [],
    keyLength: [],
    descending: [],
    type: "",
    unique: false,
    primary: false,
    visible: false,
    comment: "",
    definition: "",
  };
}

export const IndexMetadata = {
  encode(message: IndexMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.expressions) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(74).fork();
    for (const v of message.keyLength) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(82).fork();
    for (const v of message.descending) {
      writer.bool(v);
    }
    writer.ldelim();
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.unique === true) {
      writer.uint32(32).bool(message.unique);
    }
    if (message.primary === true) {
      writer.uint32(40).bool(message.primary);
    }
    if (message.visible === true) {
      writer.uint32(48).bool(message.visible);
    }
    if (message.comment !== "") {
      writer.uint32(58).string(message.comment);
    }
    if (message.definition !== "") {
      writer.uint32(66).string(message.definition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expressions.push(reader.string());
          continue;
        case 9:
          if (tag === 72) {
            message.keyLength.push(reader.int64() as Long);

            continue;
          }

          if (tag === 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keyLength.push(reader.int64() as Long);
            }

            continue;
          }

          break;
        case 10:
          if (tag === 80) {
            message.descending.push(reader.bool());

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.descending.push(reader.bool());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.unique = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.primary = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.visible = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.definition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      expressions: globalThis.Array.isArray(object?.expressions)
        ? object.expressions.map((e: any) => globalThis.String(e))
        : [],
      keyLength: globalThis.Array.isArray(object?.keyLength) ? object.keyLength.map((e: any) => Long.fromValue(e)) : [],
      descending: globalThis.Array.isArray(object?.descending)
        ? object.descending.map((e: any) => globalThis.Boolean(e))
        : [],
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      unique: isSet(object.unique) ? globalThis.Boolean(object.unique) : false,
      primary: isSet(object.primary) ? globalThis.Boolean(object.primary) : false,
      visible: isSet(object.visible) ? globalThis.Boolean(object.visible) : false,
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
    };
  },

  toJSON(message: IndexMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.expressions?.length) {
      obj.expressions = message.expressions;
    }
    if (message.keyLength?.length) {
      obj.keyLength = message.keyLength.map((e) => (e || Long.ZERO).toString());
    }
    if (message.descending?.length) {
      obj.descending = message.descending;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.unique === true) {
      obj.unique = message.unique;
    }
    if (message.primary === true) {
      obj.primary = message.primary;
    }
    if (message.visible === true) {
      obj.visible = message.visible;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    return obj;
  },

  create(base?: DeepPartial<IndexMetadata>): IndexMetadata {
    return IndexMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IndexMetadata>): IndexMetadata {
    const message = createBaseIndexMetadata();
    message.name = object.name ?? "";
    message.expressions = object.expressions?.map((e) => e) || [];
    message.keyLength = object.keyLength?.map((e) => Long.fromValue(e)) || [];
    message.descending = object.descending?.map((e) => e) || [];
    message.type = object.type ?? "";
    message.unique = object.unique ?? false;
    message.primary = object.primary ?? false;
    message.visible = object.visible ?? false;
    message.comment = object.comment ?? "";
    message.definition = object.definition ?? "";
    return message;
  },
};

function createBaseExtensionMetadata(): ExtensionMetadata {
  return { name: "", schema: "", version: "", description: "" };
}

export const ExtensionMetadata = {
  encode(message: ExtensionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(18).string(message.schema);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      schema: isSet(object.schema) ? globalThis.String(object.schema) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: ExtensionMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<ExtensionMetadata>): ExtensionMetadata {
    return ExtensionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExtensionMetadata>): ExtensionMetadata {
    const message = createBaseExtensionMetadata();
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.version = object.version ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseForeignKeyMetadata(): ForeignKeyMetadata {
  return {
    name: "",
    columns: [],
    referencedSchema: "",
    referencedTable: "",
    referencedColumns: [],
    onDelete: "",
    onUpdate: "",
    matchType: "",
  };
}

export const ForeignKeyMetadata = {
  encode(message: ForeignKeyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.columns) {
      writer.uint32(18).string(v!);
    }
    if (message.referencedSchema !== "") {
      writer.uint32(26).string(message.referencedSchema);
    }
    if (message.referencedTable !== "") {
      writer.uint32(34).string(message.referencedTable);
    }
    for (const v of message.referencedColumns) {
      writer.uint32(42).string(v!);
    }
    if (message.onDelete !== "") {
      writer.uint32(50).string(message.onDelete);
    }
    if (message.onUpdate !== "") {
      writer.uint32(58).string(message.onUpdate);
    }
    if (message.matchType !== "") {
      writer.uint32(66).string(message.matchType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForeignKeyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForeignKeyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columns.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.referencedSchema = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.referencedTable = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.referencedColumns.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.onDelete = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onUpdate = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.matchType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ForeignKeyMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      columns: globalThis.Array.isArray(object?.columns) ? object.columns.map((e: any) => globalThis.String(e)) : [],
      referencedSchema: isSet(object.referencedSchema) ? globalThis.String(object.referencedSchema) : "",
      referencedTable: isSet(object.referencedTable) ? globalThis.String(object.referencedTable) : "",
      referencedColumns: globalThis.Array.isArray(object?.referencedColumns)
        ? object.referencedColumns.map((e: any) => globalThis.String(e))
        : [],
      onDelete: isSet(object.onDelete) ? globalThis.String(object.onDelete) : "",
      onUpdate: isSet(object.onUpdate) ? globalThis.String(object.onUpdate) : "",
      matchType: isSet(object.matchType) ? globalThis.String(object.matchType) : "",
    };
  },

  toJSON(message: ForeignKeyMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.columns?.length) {
      obj.columns = message.columns;
    }
    if (message.referencedSchema !== "") {
      obj.referencedSchema = message.referencedSchema;
    }
    if (message.referencedTable !== "") {
      obj.referencedTable = message.referencedTable;
    }
    if (message.referencedColumns?.length) {
      obj.referencedColumns = message.referencedColumns;
    }
    if (message.onDelete !== "") {
      obj.onDelete = message.onDelete;
    }
    if (message.onUpdate !== "") {
      obj.onUpdate = message.onUpdate;
    }
    if (message.matchType !== "") {
      obj.matchType = message.matchType;
    }
    return obj;
  },

  create(base?: DeepPartial<ForeignKeyMetadata>): ForeignKeyMetadata {
    return ForeignKeyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ForeignKeyMetadata>): ForeignKeyMetadata {
    const message = createBaseForeignKeyMetadata();
    message.name = object.name ?? "";
    message.columns = object.columns?.map((e) => e) || [];
    message.referencedSchema = object.referencedSchema ?? "";
    message.referencedTable = object.referencedTable ?? "";
    message.referencedColumns = object.referencedColumns?.map((e) => e) || [];
    message.onDelete = object.onDelete ?? "";
    message.onUpdate = object.onUpdate ?? "";
    message.matchType = object.matchType ?? "";
    return message;
  },
};

function createBaseInstanceRoleMetadata(): InstanceRoleMetadata {
  return { name: "", grant: "" };
}

export const InstanceRoleMetadata = {
  encode(message: InstanceRoleMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.grant !== "") {
      writer.uint32(58).string(message.grant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstanceRoleMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceRoleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.grant = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceRoleMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      grant: isSet(object.grant) ? globalThis.String(object.grant) : "",
    };
  },

  toJSON(message: InstanceRoleMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.grant !== "") {
      obj.grant = message.grant;
    }
    return obj;
  },

  create(base?: DeepPartial<InstanceRoleMetadata>): InstanceRoleMetadata {
    return InstanceRoleMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceRoleMetadata>): InstanceRoleMetadata {
    const message = createBaseInstanceRoleMetadata();
    message.name = object.name ?? "";
    message.grant = object.grant ?? "";
    return message;
  },
};

function createBaseSecrets(): Secrets {
  return { items: [] };
}

export const Secrets = {
  encode(message: Secrets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      SecretItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Secrets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecrets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(SecretItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Secrets {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => SecretItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: Secrets): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => SecretItem.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Secrets>): Secrets {
    return Secrets.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Secrets>): Secrets {
    const message = createBaseSecrets();
    message.items = object.items?.map((e) => SecretItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSecretItem(): SecretItem {
  return { name: "", value: "", description: "" };
}

export const SecretItem = {
  encode(message: SecretItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecretItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecretItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecretItem {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: SecretItem): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<SecretItem>): SecretItem {
    return SecretItem.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecretItem>): SecretItem {
    const message = createBaseSecretItem();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseDatabaseConfig(): DatabaseConfig {
  return { name: "", schemaConfigs: [] };
}

export const DatabaseConfig = {
  encode(message: DatabaseConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.schemaConfigs) {
      SchemaConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DatabaseConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatabaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schemaConfigs.push(SchemaConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DatabaseConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      schemaConfigs: globalThis.Array.isArray(object?.schemaConfigs)
        ? object.schemaConfigs.map((e: any) => SchemaConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DatabaseConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.schemaConfigs?.length) {
      obj.schemaConfigs = message.schemaConfigs.map((e) => SchemaConfig.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DatabaseConfig>): DatabaseConfig {
    return DatabaseConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DatabaseConfig>): DatabaseConfig {
    const message = createBaseDatabaseConfig();
    message.name = object.name ?? "";
    message.schemaConfigs = object.schemaConfigs?.map((e) => SchemaConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSchemaConfig(): SchemaConfig {
  return { name: "", tableConfigs: [], functionConfigs: [], procedureConfigs: [], viewConfigs: [] };
}

export const SchemaConfig = {
  encode(message: SchemaConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.tableConfigs) {
      TableConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.functionConfigs) {
      FunctionConfig.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.procedureConfigs) {
      ProcedureConfig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.viewConfigs) {
      ViewConfig.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tableConfigs.push(TableConfig.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.functionConfigs.push(FunctionConfig.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.procedureConfigs.push(ProcedureConfig.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.viewConfigs.push(ViewConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tableConfigs: globalThis.Array.isArray(object?.tableConfigs)
        ? object.tableConfigs.map((e: any) => TableConfig.fromJSON(e))
        : [],
      functionConfigs: globalThis.Array.isArray(object?.functionConfigs)
        ? object.functionConfigs.map((e: any) => FunctionConfig.fromJSON(e))
        : [],
      procedureConfigs: globalThis.Array.isArray(object?.procedureConfigs)
        ? object.procedureConfigs.map((e: any) => ProcedureConfig.fromJSON(e))
        : [],
      viewConfigs: globalThis.Array.isArray(object?.viewConfigs)
        ? object.viewConfigs.map((e: any) => ViewConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SchemaConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tableConfigs?.length) {
      obj.tableConfigs = message.tableConfigs.map((e) => TableConfig.toJSON(e));
    }
    if (message.functionConfigs?.length) {
      obj.functionConfigs = message.functionConfigs.map((e) => FunctionConfig.toJSON(e));
    }
    if (message.procedureConfigs?.length) {
      obj.procedureConfigs = message.procedureConfigs.map((e) => ProcedureConfig.toJSON(e));
    }
    if (message.viewConfigs?.length) {
      obj.viewConfigs = message.viewConfigs.map((e) => ViewConfig.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaConfig>): SchemaConfig {
    return SchemaConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaConfig>): SchemaConfig {
    const message = createBaseSchemaConfig();
    message.name = object.name ?? "";
    message.tableConfigs = object.tableConfigs?.map((e) => TableConfig.fromPartial(e)) || [];
    message.functionConfigs = object.functionConfigs?.map((e) => FunctionConfig.fromPartial(e)) || [];
    message.procedureConfigs = object.procedureConfigs?.map((e) => ProcedureConfig.fromPartial(e)) || [];
    message.viewConfigs = object.viewConfigs?.map((e) => ViewConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTableConfig(): TableConfig {
  return { name: "", columnConfigs: [], classificationId: "", updater: "", updateTime: undefined };
}

export const TableConfig = {
  encode(message: TableConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.columnConfigs) {
      ColumnConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.classificationId !== "") {
      writer.uint32(26).string(message.classificationId);
    }
    if (message.updater !== "") {
      writer.uint32(34).string(message.updater);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.columnConfigs.push(ColumnConfig.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classificationId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TableConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      columnConfigs: globalThis.Array.isArray(object?.columnConfigs)
        ? object.columnConfigs.map((e: any) => ColumnConfig.fromJSON(e))
        : [],
      classificationId: isSet(object.classificationId) ? globalThis.String(object.classificationId) : "",
      updater: isSet(object.updater) ? globalThis.String(object.updater) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: TableConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.columnConfigs?.length) {
      obj.columnConfigs = message.columnConfigs.map((e) => ColumnConfig.toJSON(e));
    }
    if (message.classificationId !== "") {
      obj.classificationId = message.classificationId;
    }
    if (message.updater !== "") {
      obj.updater = message.updater;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<TableConfig>): TableConfig {
    return TableConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TableConfig>): TableConfig {
    const message = createBaseTableConfig();
    message.name = object.name ?? "";
    message.columnConfigs = object.columnConfigs?.map((e) => ColumnConfig.fromPartial(e)) || [];
    message.classificationId = object.classificationId ?? "";
    message.updater = object.updater ?? "";
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseFunctionConfig(): FunctionConfig {
  return { name: "", updater: "", updateTime: undefined };
}

export const FunctionConfig = {
  encode(message: FunctionConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FunctionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FunctionConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updater: isSet(object.updater) ? globalThis.String(object.updater) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: FunctionConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updater !== "") {
      obj.updater = message.updater;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<FunctionConfig>): FunctionConfig {
    return FunctionConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FunctionConfig>): FunctionConfig {
    const message = createBaseFunctionConfig();
    message.name = object.name ?? "";
    message.updater = object.updater ?? "";
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseProcedureConfig(): ProcedureConfig {
  return { name: "", updater: "", updateTime: undefined };
}

export const ProcedureConfig = {
  encode(message: ProcedureConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcedureConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProcedureConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updater: isSet(object.updater) ? globalThis.String(object.updater) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: ProcedureConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updater !== "") {
      obj.updater = message.updater;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<ProcedureConfig>): ProcedureConfig {
    return ProcedureConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProcedureConfig>): ProcedureConfig {
    const message = createBaseProcedureConfig();
    message.name = object.name ?? "";
    message.updater = object.updater ?? "";
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseViewConfig(): ViewConfig {
  return { name: "", updater: "", updateTime: undefined };
}

export const ViewConfig = {
  encode(message: ViewConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ViewConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseViewConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ViewConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      updater: isSet(object.updater) ? globalThis.String(object.updater) : "",
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: ViewConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.updater !== "") {
      obj.updater = message.updater;
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<ViewConfig>): ViewConfig {
    return ViewConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ViewConfig>): ViewConfig {
    const message = createBaseViewConfig();
    message.name = object.name ?? "";
    message.updater = object.updater ?? "";
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseColumnConfig(): ColumnConfig {
  return { name: "", semanticTypeId: "", labels: {}, classificationId: "" };
}

export const ColumnConfig = {
  encode(message: ColumnConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.semanticTypeId !== "") {
      writer.uint32(18).string(message.semanticTypeId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ColumnConfig_LabelsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.classificationId !== "") {
      writer.uint32(34).string(message.classificationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColumnConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.semanticTypeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ColumnConfig_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.classificationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      semanticTypeId: isSet(object.semanticTypeId) ? globalThis.String(object.semanticTypeId) : "",
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      classificationId: isSet(object.classificationId) ? globalThis.String(object.classificationId) : "",
    };
  },

  toJSON(message: ColumnConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.semanticTypeId !== "") {
      obj.semanticTypeId = message.semanticTypeId;
    }
    if (message.labels) {
      const entries = Object.entries(message.labels);
      if (entries.length > 0) {
        obj.labels = {};
        entries.forEach(([k, v]) => {
          obj.labels[k] = v;
        });
      }
    }
    if (message.classificationId !== "") {
      obj.classificationId = message.classificationId;
    }
    return obj;
  },

  create(base?: DeepPartial<ColumnConfig>): ColumnConfig {
    return ColumnConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ColumnConfig>): ColumnConfig {
    const message = createBaseColumnConfig();
    message.name = object.name ?? "";
    message.semanticTypeId = object.semanticTypeId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.classificationId = object.classificationId ?? "";
    return message;
  },
};

function createBaseColumnConfig_LabelsEntry(): ColumnConfig_LabelsEntry {
  return { key: "", value: "" };
}

export const ColumnConfig_LabelsEntry = {
  encode(message: ColumnConfig_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColumnConfig_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColumnConfig_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColumnConfig_LabelsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ColumnConfig_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<ColumnConfig_LabelsEntry>): ColumnConfig_LabelsEntry {
    return ColumnConfig_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ColumnConfig_LabelsEntry>): ColumnConfig_LabelsEntry {
    const message = createBaseColumnConfig_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseLinkedDatabaseMetadata(): LinkedDatabaseMetadata {
  return { name: "", username: "", host: "" };
}

export const LinkedDatabaseMetadata = {
  encode(message: LinkedDatabaseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedDatabaseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedDatabaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkedDatabaseMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
    };
  },

  toJSON(message: LinkedDatabaseMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    return obj;
  },

  create(base?: DeepPartial<LinkedDatabaseMetadata>): LinkedDatabaseMetadata {
    return LinkedDatabaseMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LinkedDatabaseMetadata>): LinkedDatabaseMetadata {
    const message = createBaseLinkedDatabaseMetadata();
    message.name = object.name ?? "";
    message.username = object.username ?? "";
    message.host = object.host ?? "";
    return message;
  },
};

function createBaseSequenceMetadata(): SequenceMetadata {
  return { name: "", dataType: "" };
}

export const SequenceMetadata = {
  encode(message: SequenceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataType !== "") {
      writer.uint32(18).string(message.dataType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SequenceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequenceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SequenceMetadata {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      dataType: isSet(object.dataType) ? globalThis.String(object.dataType) : "",
    };
  },

  toJSON(message: SequenceMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.dataType !== "") {
      obj.dataType = message.dataType;
    }
    return obj;
  },

  create(base?: DeepPartial<SequenceMetadata>): SequenceMetadata {
    return SequenceMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SequenceMetadata>): SequenceMetadata {
    const message = createBaseSequenceMetadata();
    message.name = object.name ?? "";
    message.dataType = object.dataType ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
