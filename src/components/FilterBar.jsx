import React from "react";

function FilterBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  statusOptions,
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Serch by Company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />

        <select
          name="statusfiler"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="input md:w-60"
        >
          <option value="All">All Status</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default FilterBar;
