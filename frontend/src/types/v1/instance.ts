import { EMPTY_ID, UNKNOWN_ID } from "../const";
import { Engine, State } from "../proto/v1/common";
import type { Environment } from "../proto/v1/environment_service";
import { Instance, InstanceResource } from "../proto/v1/instance_service";
import {
  EMPTY_ENVIRONMENT_NAME,
  emptyEnvironment,
  UNKNOWN_ENVIRONMENT_NAME,
  unknownEnvironment,
} from "./environment";

export const EMPTY_INSTANCE_NAME = `instances/${EMPTY_ID}`;
export const UNKNOWN_INSTANCE_NAME = `instances/${UNKNOWN_ID}`;

export interface ComposedInstance extends Instance {
  environmentEntity: Environment;
}

export const emptyInstance = (): ComposedInstance => {
  const environmentEntity = emptyEnvironment();
  const instance = Instance.fromJSON({
    name: EMPTY_INSTANCE_NAME,
    uid: String(EMPTY_ID),
    state: State.ACTIVE,
    title: "",
    engine: Engine.MYSQL,
    environment: environmentEntity.name,
  });
  return {
    ...instance,
    environmentEntity,
  };
};

export const unknownInstance = (): ComposedInstance => {
  const environmentEntity = unknownEnvironment();
  const instance = {
    ...emptyInstance(),
    name: UNKNOWN_INSTANCE_NAME,
    uid: String(UNKNOWN_ID),
    title: "<<Unknown instance>>",
    environment: environmentEntity.name,
  };
  return {
    ...instance,
    environmentEntity,
  };
};

export const emptyInstanceResource = (): InstanceResource => {
  const instance = InstanceResource.fromJSON({
    title: "",
    engine: Engine.MYSQL,
  });
  return {
    ...instance,
    name: EMPTY_INSTANCE_NAME,
    environment: EMPTY_ENVIRONMENT_NAME,
  };
};

export const unknownInstanceResource = (): InstanceResource => {
  const instance = {
    ...emptyInstance(),
    title: "<<Unknown instance>>",
  };
  return {
    ...instance,
    name: UNKNOWN_INSTANCE_NAME,
    environment: UNKNOWN_ENVIRONMENT_NAME,
  };
};

export const isValidInstanceName = (name: any): name is string => {
  return (
    typeof name === "string" &&
    name.startsWith("instances/") &&
    name !== EMPTY_INSTANCE_NAME &&
    name !== UNKNOWN_INSTANCE_NAME
  );
};

export const defaultCharsetOfEngineV1 = (engine: Engine): string => {
  switch (engine) {
    case Engine.CLICKHOUSE:
    case Engine.SNOWFLAKE:
    case Engine.STARROCKS:
      return "";
    case Engine.MYSQL:
    case Engine.TIDB:
    case Engine.MARIADB:
    case Engine.OCEANBASE:
      return "utf8mb4";
    case Engine.POSTGRES:
      return "UTF8";
    case Engine.COCKROACHDB:
      return "UTF8";
    case Engine.MONGODB:
      return "";
    case Engine.SPANNER:
      return "";
    case Engine.REDIS:
      return "";
    case Engine.ORACLE:
      return "UTF8";
    case Engine.MSSQL:
      return "";
    case Engine.REDSHIFT:
      return "UNICODE";
    case Engine.DM:
      return "UTF8";
    case Engine.HIVE:
      return "default";
    case Engine.BIGQUERY:
      return "";
    case Engine.DYNAMODB:
      return "";
    case Engine.DATABRICKS:
      return "";
  }
  return "";
};

export const defaultCollationOfEngineV1 = (engine: Engine): string => {
  switch (engine) {
    case Engine.CLICKHOUSE:
    case Engine.SNOWFLAKE:
    case Engine.STARROCKS:
      return "";
    case Engine.MYSQL:
    case Engine.TIDB:
    case Engine.MARIADB:
    case Engine.OCEANBASE:
      return "utf8mb4_general_ci";
    // For postgres, we don't explicitly specify a default since the default might be UNSET (denoted by "C").
    // If that's the case, setting an explicit default such as "en_US.UTF-8" might fail if the instance doesn't
    // install it.
    case Engine.POSTGRES:
      return "";
    case Engine.COCKROACHDB:
      return "";
    case Engine.MONGODB:
      return "";
    case Engine.SPANNER:
      return "";
    case Engine.REDIS:
      return "";
    case Engine.ORACLE:
      return "BINARY_CI";
    case Engine.MSSQL:
      return "";
    case Engine.REDSHIFT:
      return "";
    case Engine.DM:
      return "BINARY_CI";
    case Engine.HIVE:
      return "default";
    case Engine.BIGQUERY:
      return "";
    case Engine.DYNAMODB:
      return "";
    case Engine.DATABRICKS:
      return "";
  }
  return "";
};

export function isPostgresFamily(type: Engine): boolean {
  return (
    type == Engine.POSTGRES ||
    type == Engine.REDSHIFT ||
    type == Engine.RISINGWAVE ||
    type == Engine.COCKROACHDB
  );
}
