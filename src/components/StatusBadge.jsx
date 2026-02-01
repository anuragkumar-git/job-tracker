import React from "react";

export default function StatusBadge({ status }) {
  // const base = "text-xs text-center font-medium px-2 py-1 rounded-full border";
  const base = "text-xs font-medium px-2 py-1 rounded-full border";

  const statusStyle = {
    Applied: "bg-blue-50 text-blue-500 border-blue-200",
    ShortListed: "bg-purple-50 text-purple-700 border-purple-200",
    "Interview Scheduled": "bg-yellow-50 text-yellow-700 border-yellow-200",
    Interviewed: "bg-orange-50 text-orange-700 border-orange-200",
    Selected: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Rejected: "bg-red-50 text-red-700 border-red-200",
    "No Response": "bg-gray-50 text-gray-700 border-gray-200",
  };
  return (
    <span className={`${base} ${statusStyle[status] || statusStyle.Applied}`}>
      {status}
    </span>
  );
}
