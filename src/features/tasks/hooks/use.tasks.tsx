import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { useEffect } from "react";
import { AppDispatch } from "../../../core/store/store";
import * as ac from "../reducer/task.actions.creater";
import { TaskApiRepo } from "../services/repository/task.api.repo";
import { ProtoTaskStructure, TaskStructure } from "../models/task";

export function useTasks(repo: TaskApiRepo) {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await repo.loadTasks();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadTasks();
  }, [dispatch, repo]);

  const addTask = async (task: ProtoTaskStructure) => {
    try {
      const finalTask = await repo.createTask(task);
      dispatch(ac.addCreator(finalTask));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateTask = async (task: Partial<TaskStructure>) => {
    try {
      const finalTask = await repo.update(task);
      dispatch(ac.updateCreator(finalTask));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteTask = async (id: TaskStructure["id"]) => {
    try {
      repo.delete(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
