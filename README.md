# 🚀 Job Application Tracker (Personal ATS)

A personal Applicant Tracking System (ATS) built using React, Vite, Tailwind CSS (latest setup) and dnd-kit.

This project helps track job applications using a Kanban-style workflow with persistent local storage.

[Live on](https://anuragkumar-git.github.io/job-tracker/) `gh-pages`
---
### ✨ Features

- ✅ Add new job applications

- ✅ Status pipeline management

- ✅ Drag-and-drop Kanban board (dnd-kit)

- ✅ Archive / Unarchive applications

- ✅ Search and filter by status

- ✅ Persistent storage using localStorage

- ✅ Clean component architecture

- ✅ Modular and scalable folder structure

---
### 🧠 Application Workflow

Each job application moves through a status pipeline:

`Applied` -> `Shortlisted` -> `Interview Scheduled` -> `Interviewed` -> `Offer Received` -> `Selected` -> `Rejected` -> `No Response`

The Kanban board automatically groups applications by status.

Dragging a card updates its status and persists the change.

----

### 🏗️ Tech Stack

- ⚛️ React (Vite)

- 🎨 Tailwind CSS (latest Vite plugin setup)

- 🧩 dnd-kit (drag and drop)

- 💾 localStorage (data persistence)

---

### 📂 Project Structure
```      
└───src
    ├───components    → Reusable UI components
    │
    ├───data
    │       seedApplication.js
    │
    ├───features
    │   └───applications
    │           ApplicationCard.jsx
    │           ApplicationForm.jsx
    │           KanbanBoard.jsx
    │           KanbanColumn.jsx
    │
    ├───services    → Storage abstraction layer
    │
    └───utils       → Status options
```
### Architectural Decisions

- State lives in `App.jsx`

- UI components remain presentation-focused

- Storage abstraction allows easy backend upgrade later

- Kanban layout derived from job status (state-driven UI)

---

### 🧩 Key Engineering Concepts Implemented

- State-driven UI rendering

- Controlled forms with validation

- Soft delete via archive flag

- Derived state filtering

- Separation of concerns (UI vs logic vs storage)

- Drag-and-drop interaction using collision detection

---

### 🖥️ Installation
```cmd
git clone https://github.com/anuragkumar-git/job-tracker.git
cd job-tracker
npm install
npm run dev
```

---

### 📦 Future Improvements

- Backend integration (MongoDB + API)

- Authentication

- Dashboard analytics

- Interview reminders

- Resume upload per application

- Export to CSV

- Dark mode toggle

---

### 🎯 Purpose of the Project

This project was built to:

- Improve frontend architecture skills

- Practice drag-and-drop workflows

- Implement state-driven UI patterns

- Build a real-world productivity tool
