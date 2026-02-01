import { useState } from "react";
import { getApplications } from "./services/storage";
import ApplicationCard from "./features/applications/ApplicationCard";

function App() {
  const [jobs, setJobs] = useState(() => getApplications());

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        {jobs.map((job) => (
          <ApplicationCard key={job?.id} application={job} />
        ))}
      </div>
    </>
  );
}

export default App;
