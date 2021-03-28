import { Task, StageId, Stage, EnvironmentId } from "../types";
import { templateForType } from "../plugins";

export function stageName(task: Task, stageId: StageId): string {
  for (const stage of task.stageList) {
    if (stage.id == stageId) {
      return stage.name;
    }
  }
  return "<<Unknown stage>>";
}

// Returns true if the last stage of the task is DONE or SKIPPED
export function pendingResolve(task: Task): boolean {
  const lastStage = task.stageList[task.stageList.length - 1];
  if (activeStage(task) == lastStage) {
    return lastStage.status === "DONE" || lastStage.status === "SKIPPED";
  }
  return false;
}

export function activeStage(task: Task): Stage {
  for (const stage of task.stageList) {
    if (
      stage.status === "PENDING" ||
      stage.status === "RUNNING" ||
      // "FAILED" is also a transient stage status, which requires user
      // to take further action (e.g. Cancel, Skip, Retry)
      stage.status === "FAILED"
    ) {
      return stage;
    }
  }
  return task.stageList[task.stageList.length - 1];
}

export function activeStageIsRunning(task: Task): boolean {
  return activeStage(task).status === "RUNNING";
}

export function activeEnvironmentId(task: Task): EnvironmentId | null {
  const stage = activeStage(task);
  if (stage.environmentId) {
    return stage.environmentId!;
  }
  const taskTemplate = templateForType(task.type);
  if (taskTemplate) {
    const inputFieldList =
      taskTemplate.fieldList?.filter((item) => item.category === "INPUT") || [];
    for (const field of inputFieldList) {
      if (field.type === "Environment") {
        return task.payload[field.id];
      }
    }
  }
  return null;
}
