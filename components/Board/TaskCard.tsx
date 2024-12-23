import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "@/lib/types";
import { SlCard } from "../ShoelaceWrapper";

interface TaskItemProps {
  task: Task;
}

export const TaskCard: React.FC<TaskItemProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 mb-2 rounded shadow cursor-move"
    >
      <SlCard>
        <div slot="header">{task.title}</div>
        <div className="text-sm text-gray-600">{task.description}</div>
      </SlCard>
    </div>
  );
};
