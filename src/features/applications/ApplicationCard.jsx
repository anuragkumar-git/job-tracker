import { useDraggable } from "@dnd-kit/core";
import StatusBadge from "../../components/StatusBadge";
import { STATUS_OPTIONS } from "../../utils/statusOptions";

function ApplicationCard({ application, onStatusChange, onArchive }) {
  const {
    id,
    companyName,
    jobRole,
    workMode,
    jobType,
    location,
    ctc,
    status,
    interviewDate,
  } = application;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: application.id,
    data: {
      application,
    },
    over: application.status,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };
  return (
    <div
      {...listeners}
      {...attributes}
      className="cursor-grab text-xs text-gray-400 self-end"
    >
      <div
        style={{ ...style, touchAction: "none" }}
        className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white flex flex-col gap-3"
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{jobRole}</h2>
            <p className="text-sm text-gray-500 ">{companyName}</p>
          </div>
          {/* {!application.archived && (
            <select
              name="status"
              value={status}
              onChange={(e) => onStatusChange(id, e.target.value)}
              className="text-xs border rounded-md px-2 py-1 bg-white"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )} */}
          <StatusBadge status={status} />
        </div>
        <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>{workMode}</span>
          <span>{jobType}</span>
          <span>{location}</span>
          {ctc && <span>CTC: {ctc}</span>}
        </div>
        {interviewDate && (
          <p className="text-sm text-yellow-700">
            In terview on: {new Date(interviewDate).toLocaleDateString()}
          </p>
        )}
        <button
          onClick={() => onArchive(application.id)}
          className="text-xs text-red-600 hover:underline self-end"
        >
          {application.archived ? "Unarchived" : "Archive"}
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;
