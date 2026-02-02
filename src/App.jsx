import { useState } from "react";
import { getApplications, saveApplications } from "./services/storage";
import ApplicationCard from "./features/applications/ApplicationCard";

function App() {
  const [jobs, setJobs] = useState(() => getApplications());
  const [showArchived, setShowArchived] = useState(false);

  function handleStatusChange(id, newStatus) {
    const updated = jobs.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job,
    );

    setJobs(updated);
    saveApplications(updated);
  }
  function handleArchive(id) {
    const updated = jobs.map((job) =>
      job.id === id ? { ...job, archived: true, updatedAt: new Date() } : job,
    );

    setJobs(updated);
    saveApplications(updated);
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setShowArchived(false)}
            className={!showArchived ? "font-semibold" : ""}
          >
            Active
          </button>
          <button
            onClick={() => setShowArchived(true)}
            className={showArchived ? "font-semibold" : ""}
          >
            Archived
          </button>
        </div>
        {jobs
          .filter((job) => job.archived === showArchived)
          .map((job) => (
            <ApplicationCard
              key={job?.id}
              application={job}
              onStatusChange={handleStatusChange}
              onArchive={handleArchive}
            />
          ))}
      </div>
    </>
  );
}

export default App;
