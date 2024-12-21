import { Task } from "./types";

export const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Research competitors",
    description: "Analyze top 5 competitors in the market",
    status: "todo",
  },
  {
    id: "2",
    title: "Design mockups",
    description: "Create initial design mockups for the landing page",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Write documentation",
    description: "Document the API endpoints",
    status: "done",
  },
];
