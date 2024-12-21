"use client";

import { useState } from "react";
import { Column } from "./Column";
import { Task } from "@/lib/types";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TaskCard } from "./TaskCard";
import { INITIAL_TASKS } from "@/lib/constants";
import { handleDragEnd, handleDragOver } from "@/lib/drag-utils";

export function Board() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function onDragStart(event: DragStartEvent) {
    const task = tasks.find((task) => task.id === event.active.id);
    if (task) setActiveTask(task);
  }

  const columns = {
    todo: tasks.filter((task) => task.status === "todo"),
    "in-progress": tasks.filter((task) => task.status === "in-progress"),
    done: tasks.filter((task) => task.status === "done"),
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={(event) => {
        setActiveTask(null);
        handleDragEnd(event, tasks, setTasks);
      }}
      onDragOver={(event) => {
        handleDragOver(event, tasks, setTasks);
      }}
    >
      <div className="flex gap-4 p-4">
        <Column status="todo" title="To Do" tasks={columns.todo} />
        <Column
          status="in-progress"
          title="In Progress"
          tasks={columns["in-progress"]}
        />
        <Column status="done" title="Done" tasks={columns.done} />
      </div>
      <DragOverlay>{activeTask && <TaskCard task={activeTask} />}</DragOverlay>
    </DndContext>
  );
}
