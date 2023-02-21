// export function taskReducer(state, action) {
//   return state;
// }

import { createReducer } from "@reduxjs/toolkit";
import { TaskStructure } from "../models/task";
import * as ac from "./task.actions.creater";

const initialState: TaskStructure[] = [];

export const taskReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload)
  );
  builder.addDefaultCase((state) => state);
});
