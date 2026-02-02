import React from "react";
import { STATUS_OPTIONS } from "../../utils/statusOptions";
import ApplicationCard from "./ApplicationCard";

export default function KanbanBoard({ jobs, onStatusChange, onArchive }) {
  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {STATUS_OPTIONS.map((status) => {
          const columnJobs = jobs.filter((job) => job.status === status);
          return (
            <div
              key={status}
              className="min-w-75 bg-gray-50 rounded-xl p-4 flex flex-col gap-4"
            >
              <h3 className="font-semibold text-gray-700">{status}</h3>

              {columnJobs.map((job) => (
                <ApplicationCard
                  key={job.id}
                  application={job}
                  onStatusChange={onStatusChange}
                  onArchive={onArchive}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
