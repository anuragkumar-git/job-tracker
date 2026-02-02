import React, { useState } from "react";

function ApplicationForm({ onAdd }) {
  const [form, setForm] = useState({
    companyName: "",
    jobRole: "",
    jobLink: "",
    workMode: "OnSite",
    jobType: "Full-Time",
    location: "",
    ctc: "",
    interviewDate: "",
    notes: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(form);
    console.log(form);
    setForm({
      companyName: "",
      jobRole: "",
      jobLink: "",
      workMode: "OnSite",
      jobType: "Full-Time",
      location: "",
      ctc: "",
      interviewDate: "",
      notes: "",
    });
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4"
      >
        <h2 className="text-lg font-semibold">Add new Application</h2>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-400;"
        />
        <input
          type="text"
          name="jobRole"
          placeholder="Job Role"
          value={form.jobRole}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="jobLink"
          placeholder="Job Link"
          value={form.jobLink}
          onChange={handleChange}
          className="input"
        />
        <div className="flex gap-4">
          <select
            name="workMode"
            value={form.workMode}
            onChange={handleChange}
            className="input"
          >
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
          <select
            name="jobType"
            value={form.jobType}
            onChange={handleChange}
            className="input"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ctc"
          placeholder="CTC (Optional)"
          value={form.ctc}
          onChange={handleChange}
        />
        <input
          type="date"
          name="interviewDate"
          value={form.interviewDate}
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />

        <button className="bg-gray-900 text-white py-2 rounded-lg">
          Add Application
        </button>
      </form>
    </>
  );
}

export default ApplicationForm;
