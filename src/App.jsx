import { useState } from "react";
import { getApplications } from "./services/storage";

function App() {
  const [jobs, setJobs] = useState(() => getApplications());

  return (
    <>
      {jobs.map((job) => (
        <div key={job?.id}>
          <p>
            {job?.companyName} - {job?.location} - {job?.jobRole}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
