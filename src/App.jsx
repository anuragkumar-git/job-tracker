import { useState } from "react";
import { getApplications, saveApplications } from "./services/storage";
import ApplicationCard from "./features/applications/ApplicationCard";

function App() {
  const [jobs, setJobs] = useState(() => getApplications());

  function handleStatusChange(id, newStatus) {
    const updated = jobs.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job,
    );

    setJobs(updated);
    saveApplications(updated);
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        {jobs.map((job) => (
          <ApplicationCard
            key={job?.id}
            application={job}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </>
  );
}

export default App;
