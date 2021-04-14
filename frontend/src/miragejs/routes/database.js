import { Response } from "miragejs";
import { ALL_DATABASE_NAME } from "../../types";
import { WORKSPACE_ID } from "./index";

export default function configureDatabase(route) {
  route.get("/database/:id", function (schema, request) {
    const database = schema.databases.find(request.params.id);
    if (database) {
      return database;
    }
    return new Response(
      404,
      {},
      { errors: "Database " + request.params.id + " not found" }
    );
  });

  route.get("/database", function (schema, request) {
    const {
      queryParams: {
        environment: environmentId,
        instance: instanceId,
        user: userId,
      },
    } = request;
    const instanceIdList = instanceId
      ? [instanceId]
      : environmentId
      ? schema.instances
          .where({ workspaceId: WORKSPACE_ID, environmentId })
          .models.map((instance) => instance.id)
      : schema.instances
          .where({ workspaceId: WORKSPACE_ID })
          .models.map((instance) => instance.id);
    if (instanceIdList && instanceIdList.length == 0) {
      return [];
    }

    return schema.databases
      .where((database) => {
        if (database.name == ALL_DATABASE_NAME) {
          return false;
        }

        if (instanceIdList && !instanceIdList.includes(database.instanceId)) {
          return false;
        }

        if (userId) {
          const project = schema.projects.find(database.projectId);

          if (!project) {
            return false;
          }

          return (
            schema.projectRoleMappings.findBy({
              principalId: userId,
              projectId: project.id,
              workspaceId: WORKSPACE_ID,
            }) != undefined
          );
        }

        return true;
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
  });

  route.post("/database", function (schema, request) {
    const ts = Date.now();
    const { taskId, creatorId, ...attrs } = this.normalizedRequestAttrs(
      "database"
    );

    if (attrs.name == ALL_DATABASE_NAME) {
      return new Response(
        400,
        {},
        {
          errors: `Cannot specify * as the database name`,
        }
      );
    }

    const newDatabase = {
      ...attrs,
      createdTs: ts,
      lastUpdatedTs: ts,
      syncStatus: "OK",
      lastSuccessfulSyncTs: ts,
      workspaceId: WORKSPACE_ID,
    };

    if (taskId) {
      schema.activities.create({
        createdTs: ts,
        lastUpdatedTs: ts,
        actionType: "bytebase.task",
        containerId: taskId,
        creatorId: creatorId,
        comment: `Created database ${newDatabase.name}`,
        workspaceId: WORKSPACE_ID,
      });
    }
    const createdDatabase = schema.databases.create(newDatabase);
    return createdDatabase;
  });

  route.patch("/database/:databaseId", function (schema, request) {
    const attrs = this.normalizedRequestAttrs("database-patch");
    const database = schema.databases.find(request.params.databaseId);
    if (!database) {
      return new Response(
        404,
        {},
        { errors: "Database " + request.params.databaseId + " not found" }
      );
    }

    if (attrs.name == ALL_DATABASE_NAME) {
      return new Response(
        400,
        {},
        {
          errors: `Cannot specify * as the database name`,
        }
      );
    }

    return database.update({ ...attrs, lastUpdatedTs: Date.now() });
  });
}
