import { useMemo } from "react";
import { useTasks } from "../../hooks/use.tasks";
import { TaskApiRepo } from "../../services/repository/task.api.repo";

export function Tasks() {
  const repo = useMemo(() => new TaskApiRepo(), []);
  const { tasks } = useTasks(repo);
  return (
    <>
      <h1>Tasks List</h1>
      <section>
        <ul>
          {tasks.map((item) => (
            <li key={item.id}>
              {item.name} | {item.owner}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
