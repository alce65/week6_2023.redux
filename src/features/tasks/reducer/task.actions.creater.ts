import { createAction } from "@reduxjs/toolkit";
import { tasksActions } from "./tasks.actions.types";
import { TaskStructure } from "../models/task";

export const loadCreator = createAction<TaskStructure[]>(tasksActions.load);

export const addCreator = createAction<TaskStructure>(tasksActions.add);

export const updateCreator = createAction<TaskStructure>(tasksActions.update);

export const deleteCreator = createAction<TaskStructure["id"]>(
  tasksActions.delete
);
