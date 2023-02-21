import { useTasks } from "../../hooks/use.tasks";

export function Tasks() {
  const { tasks } = useTasks();
  return (
    <>
      <h1>Tasks List</h1>
      <section>
        <ul>
          {tasks.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
