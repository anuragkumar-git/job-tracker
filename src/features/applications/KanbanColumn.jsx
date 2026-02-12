import { useDroppable } from "@dnd-kit/core";
import ApplicationCard from "./ApplicationCard";

export default function KanbanColumn({
  status,
  jobs,
  onStatusChange,
  onArchive,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });
  // console.log("Droppable status:", status);
  return (
    <div
      ref={setNodeRef}
      // className ="min-w-75 min-h-50 bg-red-100  rounded-xl p-4 flex-flex-col gap-y-4"
      className={`min-w-75 min-h-75 p-4 rounded-xl border-2 ${isOver ? "bg-green-200" : "bg-yellow-50"} `}
    >
      <h3 className="font-semibold text-gray-700">{status}</h3>

      {jobs.map((job) => (
        <ApplicationCard
          key={job.id}
          application={job}
          onStatusChange={onStatusChange}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}
