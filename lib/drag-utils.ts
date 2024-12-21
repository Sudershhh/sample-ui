import { DragEndEvent, DragOverEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Task, Status } from "./types";

export function handleDragEnd(
  event: DragEndEvent,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  if (activeId === overId) return;

  setTasks((tasks) => {
    const activeIndex = tasks.findIndex((t) => t.id === activeId);
    const overIndex = tasks.findIndex((t) => t.id === overId);

    if (overIndex === -1) {
      // The over element is a column
      const activeTask = tasks[activeIndex];
      const updatedTask = { ...activeTask, status: overId as Status };
      const updatedTasks = [...tasks];
      updatedTasks[activeIndex] = updatedTask;
      return updatedTasks;
    }

    // Reordering within the same column or between columns
    return arrayMove(tasks, activeIndex, overIndex);
  });
}

export function handleDragOver(
  event: DragOverEvent,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  const { active, over } = event;
  if (!over) return;

  const activeId = active.id;
  const overId = over.id;

  if (activeId === overId) return;

  const activeTask = tasks.find((task) => task.id === activeId);
  const overTask = tasks.find((task) => task.id === overId);

  if (!activeTask) return;

  setTasks((tasks) => {
    const activeIndex = tasks.findIndex((t) => t.id === activeId);
    const overIndex = tasks.findIndex((t) => t.id === overId);

    if (overIndex === -1) {
      // The over element is a column
      const updatedTask = { ...activeTask, status: overId as Status };
      const updatedTasks = [...tasks];
      updatedTasks[activeIndex] = updatedTask;
      return updatedTasks;
    }

    if (activeTask.status !== overTask?.status) {
      // Moving to a different column
      const updatedTask = { ...activeTask, status: overTask?.status as Status };
      const updatedTasks = [...tasks];
      updatedTasks[activeIndex] = updatedTask;
      return arrayMove(updatedTasks, activeIndex, overIndex);
    }

    // Reordering within the same column
    return arrayMove(tasks, activeIndex, overIndex);
  });
}
