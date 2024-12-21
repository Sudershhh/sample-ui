"use client";

import { Status, Task } from "@/lib/types";
import { TaskCard } from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SlCard } from "../ShoelaceWrapper";
interface ColumnProps {
  status: Status;
  tasks: Task[];
  title: string;
}

export function Column({ status, tasks, title }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div className="flex flex-col w-80">
      <SlCard>
        <div slot="header" className="font-semibold">
          {title} ({tasks.length})
        </div>
        <div
          ref={setNodeRef}
          className="flex-1 p-2 bg-gray-100 rounded min-h-[500px]"
        >
          <SortableContext
            items={tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </div>
      </SlCard>
    </div>
  );
}
