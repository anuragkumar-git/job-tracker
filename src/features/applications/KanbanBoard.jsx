import { STATUS_OPTIONS } from "../../utils/statusOptions";
import ApplicationCard from "./ApplicationCard";
import { closestCenter, DndContext } from "@dnd-kit/core";
import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard({ jobs, onStatusChange, onArchive }) {
  // console.log({KanbanBoardjobs: jobs});
  // console.log({onStatusChange: onStatusChange});

  function handleDragEnd(e) {
    const { active, over } = e;
    console.log({ e: e });
    console.log({ active: active.id });
    console.log({ over: over?.id });

    if (!over) return;
    const id = active.id;
    const newStatus = over.id;

    console.log({ id: id });
    console.log({ newStatus: newStatus });

    onStatusChange(id, newStatus);
  }
  return (
    <>
      <DndContext
        onDragStart={(e) =>
          console.log("Dragging:", e.active.data.current.application)
        }
        onDragOver={(e) => console.log("Over:", e.over?.id)}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 overflow-x-auto pb-4">
          {STATUS_OPTIONS.map((status) => {
            const columnJobs = jobs.filter((job) => job.status === status);
            return (
              <KanbanColumn
                key={status}
                status={status}
                jobs={columnJobs}
                onStatusChange={onStatusChange}
                onArchive={onArchive}
              />
            );
          })}
        </div>
      </DndContext>
    </>
  );
}
