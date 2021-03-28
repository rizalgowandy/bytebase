import isEmpty from "lodash-es/isEmpty";
import {
  TaskField,
  TaskTemplate,
  TemplateContext,
  TaskBuiltinFieldId,
  DatabaseFieldPayload,
  CUSTOM_FIELD_ID_BEGIN,
} from "../types";
import { linkfy } from "../../utils";
import { Task, TaskNew, EnvironmentId } from "../../types";

const template: TaskTemplate = {
  type: "bytebase.database.request",
  buildTask: (ctx: TemplateContext): TaskNew => {
    const payload: any = {};
    if (ctx.environmentList.length > 0) {
      // Set the last element as the default value.
      // Normally the last environment is the prod env and is most commonly used.
      payload[TaskBuiltinFieldId.ENVIRONMENT] =
        ctx.environmentList[ctx.environmentList.length - 1].id;
    }
    payload[TaskBuiltinFieldId.DATABASE] = {
      isNew: true,
      name: "",
      // Set read-only defaults to true since only read access is needed most of the time
      // and sticks to the least privilege rule.
      readOnly: true,
    };
    return {
      name: "Request db",
      type: "bytebase.database.request",
      description: "",
      stageList: [
        {
          id: "1",
          name: "Create database",
          type: "bytebase.stage.database.create",
          status: "PENDING",
        },
      ],
      creatorId: ctx.currentUser.id,
      subscriberIdList: [],
      payload,
    };
  },
  fieldList: [
    {
      category: "INPUT",
      id: TaskBuiltinFieldId.ENVIRONMENT,
      slug: "env",
      name: "Environment",
      type: "Environment",
      required: true,
      isEmpty: (value: EnvironmentId): boolean => {
        return isEmpty(value);
      },
    },
    {
      category: "INPUT",
      id: TaskBuiltinFieldId.DATABASE,
      slug: "db",
      name: "DB name",
      type: "NewDatabase",
      required: true,
      isEmpty: (value: DatabaseFieldPayload): boolean => {
        if (value.isNew) {
          return isEmpty(value.name);
        }
        return isEmpty(value.id);
      },
      placeholder: "New database name",
    },
    {
      category: "OUTPUT",
      id: CUSTOM_FIELD_ID_BEGIN + 1,
      slug: "database",
      name: "Granted database",
      type: "Database",
      required: true,
      isEmpty: (value: string): boolean => {
        return isEmpty(value?.trim());
      },
    },
  ],
};

export default template;
