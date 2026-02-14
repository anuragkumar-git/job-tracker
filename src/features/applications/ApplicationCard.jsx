import { useDraggable } from "@dnd-kit/core";
import StatusBadge from "../../components/StatusBadge";
import { STATUS_OPTIONS } from "../../utils/statusOptions";

function ApplicationCard({ application, onArchive }) {
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
    dateApplied,
    notes,
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
      // className="cursor-grab text-xs text-gray-400 self-end"
      ref={setNodeRef}
      className="text-xs text-gray-400 self-end border border-gray-200 rounded-xl p-4 shadow-sm bg-white flex flex-col gap-y-3"
      style={{ ...style }}
    >
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab"
        // style={{ ...style }}
      >
        <div className="flex  items-start justify-between">
          <div>
            <h2 className="text-lg  flex-wrap font-semibold text-gray-800">{jobRole}</h2>
            <p className="text-sm text-gray-500 ">{companyName}</p>
            {dateApplied && <span className="text-sm text-gray-500" >{dateApplied} </span>}
            {/* <p  ">{application?.createdAt}</p> */}
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
            Interview on: {new Date(interviewDate).toLocaleDateString()}
          </p>
        )}
         {notes && <span className="text-sm text-gray-500" >{notes} </span>}
      </div>
        <button
          onClick={() => onArchive(id)}
          className="text-xs text-red-600 hover:underline self-end p-1"
        >
          {application.archived ? "Unarchived" : "Archive"}
        </button>
    </div>
  );
}

export default ApplicationCard;
