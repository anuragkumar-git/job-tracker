import { useEffect, useState } from "react";
import { getApplications } from "./services/storage";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // const getJobs = getApplications();
    // setJobs(getJobs);
    // console.log("getJobs:", getJobs);
    setJobs(getApplications());
  }, []);

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
