import { useState } from "react";
import { getApplications, saveApplications } from "./services/storage";
import ApplicationCard from "./features/applications/ApplicationCard";
import ApplicationForm from "./features/applications/ApplicationForm";
import FilterBar from "./components/FilterBar";
import { STATUS_OPTIONS } from "./utils/statusOptions";
import KanbanBoard from "./features/applications/KanbanBoard";
import DndIsolationTest from "./pages/DndIsolationTest";

function App() {
  const [jobs, setJobs] = useState(() => getApplications());
  const [showArchived, setShowArchived] = useState(false);
  const [addApplication, setAddApplication] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [view, setView] = useState(false);

  function handleStatusChange(id, newStatus) {
    console.log("handleStatusChange:", newStatus);

    const updated = jobs.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job,
    );

    setJobs(updated);
    saveApplications(updated);
  }
  function handleArchive(id) {
    const updated = jobs.map(
      (job) =>
        job.id === id
          ? { ...job, archived: !job.archived, updatedAt: new Date() }
          : job,
      console.log("archive", id),
    );

    setJobs(updated);
    saveApplications(updated);
  }
  function handleApplication(data) {
    const newApplication = {
      ...data,
      id: crypto.randomUUID(),
      status: "Applied",
      archived: false,
      dateApplied: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    };
    console.log("newApplication:", newApplication);

    const updated = [newApplication, ...jobs];
    setJobs(updated);
    saveApplications(updated);
    setAddApplication(false);
  }

  const filteredJobs = jobs
    .filter((job) => job.archived === showArchived)
    .filter((job) => {
      const matachesSearch =
        job.companyName.toLowerCase().includes(search.toLowerCase()) ||
        job.jobRole.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;

      return matachesSearch && matchesStatus;
    });
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 space-y-4">
        <FilterBar
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          statusOptions={STATUS_OPTIONS}
        />
        {addApplication && <ApplicationForm onAdd={handleApplication} />}
        {!addApplication && (
          <button
            className="bg-gray-900 text-white py-2 rounded-lg px-3"
            onClick={() => {
              setAddApplication(!addApplication);
            }}
          >
            Add Application
          </button>
        )}
        <div className="flex gap-4 mb-4">
          <button
            className="bg-gray-900 text-white py-2 rounded-lg px-3"
            onClick={() => setView(!view)}
          >
            {view ? "Switch to Board" : "Switch to List"}
          </button>
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
        {/* {jobs
          .filter((job) => job.archived === showArchived) */}
        {filteredJobs.length === 0 && "No result found"}
        {view ? (
          filteredJobs.map((job) => (
            <ApplicationCard
              key={job.id}
              application={job}
              onStatusChange={handleStatusChange}
              onArchive={handleArchive}
            />
          ))
        ) : (
          <KanbanBoard
            jobs={filteredJobs}
            onStatusChange={handleStatusChange}
            onArchive={handleArchive}
          />
        )}
      </div>
      <DndIsolationTest />
    </>
  );
}

export default App;
