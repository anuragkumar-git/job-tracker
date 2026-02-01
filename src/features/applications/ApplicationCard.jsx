import StatusBadge from "../../components/StatusBadge";

function ApplicationCard({ application }) {
  const {
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
          <StatusBadge status={status} />
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
      </div>
    </>
  );
}

export default ApplicationCard;
