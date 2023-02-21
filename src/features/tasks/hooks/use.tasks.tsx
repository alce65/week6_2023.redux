import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { useEffect } from "react";
import { AppDispatch } from "../../../core/store/store";
import { getTasks } from "../mocks/tasks";
import { loadCreator } from "../reducer/task.actions.creater";

export function useTasks() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await getTasks();
      dispatch(loadCreator(data));
    };

    loadTasks();
  }, [dispatch]);

  return { tasks };
}
