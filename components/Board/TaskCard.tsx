import { Task } from "@/lib/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { forwardRef } from "react";
import { SlCard } from "@shoelace-style/shoelace/dist/react";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = forwardRef<HTMLElement, TaskCardProps>(
  ({ task }, ref) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: task.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1,
    };

    const handleRef = (element: HTMLElement | null) => {
      setNodeRef(element);
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <SlCard
        ref={handleRef}
        style={style}
        {...attributes}
        {...listeners}
        className="mb-4 cursor-grab active:cursor-grabbing"
      >
        <div slot="header" className="text-sm font-medium">
          {task.title}
        </div>
        <div className="text-sm text-gray-600">{task.description}</div>
      </SlCard>
    );
  }
);
