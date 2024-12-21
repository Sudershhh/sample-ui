import { Board } from "@/components/Board/Board";
function KanbanPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Task Management Board</h1>
        <Board />
      </div>
    </div>
  );
}

export default KanbanPage;
