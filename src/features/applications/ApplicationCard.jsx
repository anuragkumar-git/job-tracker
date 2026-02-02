import { useState } from "react";
import StatusBadge from "../../components/StatusBadge";
import { STATUS_OPTIONS } from "../../utils/statusOptions";

function ApplicationCard({ application, onStatusChange, onArchive }) {
  const {
    id,
    companyName,
    jobRole,
    workMode,
    jobtype,
    location,
    ctc,
    status,
    interviewDate,
  } = application;
  return (
    <>
      <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white flex fles-col gap-3">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{jobRole}</h2>
            <p className="text-sm text-gray-500 ">{companyName}</p>
          </div>
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
          {/* <StatusBadge status={status} /> */}
        </div>
        <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>{workMode}</span>
          <span>{jobtype}</span>
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
          Archive
        </button>
      </div>
    </>
  );
}

export default ApplicationCard;
