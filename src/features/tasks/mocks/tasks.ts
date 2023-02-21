import { TaskStructure } from "../models/task";

type MockData = { data: TaskStructure[]; tasksNumber: number };

export const getTasks = async (): Promise<MockData> => ({
  data: [
    {
      id: "1",
      name: "Make json-server",
      owner: "Pepe",
      isCompleted: true,
    },
    {
      id: "2",
      name: "some comment",
      owner: "Ernesto",
      isCompleted: false,
    },
    {
      name: "Acabar",
      owner: "Pepe",
      isCompleted: false,
      id: "3",
    },
    {
      name: "Acabar",
      owner: "Pepe",
      isCompleted: false,
      id: "4",
    },
  ],
  tasksNumber: 4,
});
