import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";

function DraggableBox({ box, onArchiveToggle }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: box.id,
    data: { box },
    disabled: box.archived, // archived items not draggable
  });

  const style = {
    width: 140,
    padding: 10,
    background: box.archived ? "#999" : "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: box.archived ? "default" : "grab",
    gap: 6,
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {!box.archived && (
        <div {...listeners} {...attributes} style={{ fontSize: 12 }}>
          {/* ⠿ Drag */}
          <div>
            <div>{box.name}</div>
            <div style={{ fontSize: 12 }}>Status: {box.status}</div>
            {/* <button
              onClick={() => onArchiveToggle(box.id)}
              style={{
                fontSize: 10,
                padding: "2px 6px",
                cursor: "pointer",
              }}
            >
              {box.archived ? "Unarchive" : "Archive"}
            </button> */}
          </div>
        </div>
      )}
      <button
        onClick={() => onArchiveToggle(box.id)}
        style={{
          fontSize: 10,
          padding: "2px 6px",
          cursor: "pointer",
        }}
      >
        {box.archived ? "Unarchive" : "Archive"}
      </button>
    </div>
  );
}



function DroppableBox({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: 250,
        height: 300,
        background: isOver ? "lightgreen" : "#eee",
        border: "4px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: 10,
        paddingTop: 10,
        fontWeight: "bold",
      }}
    >
      {id}
      {children}
    </div>
  );
}



export default function DndIsolationTest3() {
  const [boxes, setBoxes] = useState([
    { id: "1", name: "Box A", status: "LEFT", archived: false },
    { id: "2", name: "Box B", status: "LEFT", archived: false },
    { id: "3", name: "Box C", status: "RIGHT", archived: false },
  ]);
  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const draggedBox = active.data.current.box;

    setBoxes((prev) =>
      prev.map((b) => (b.id === draggedBox.id ? { ...b, status: over.id } : b)),
    );
  }

  function handleArchiveToggle(id) {
    setBoxes((prev) =>
      prev.map((b) => (b.id === id ? { ...b, archived: !b.archived } : b)),
    );
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: 40, margin: 50 }}>
        <DroppableBox id="LEFT">
          {boxes
            .filter((b) => b.status === "LEFT")
            .map((b) => (
              <DraggableBox
                key={b.id}
                box={b}
                onArchiveToggle={handleArchiveToggle}
              />
            ))}
        </DroppableBox>

        <DroppableBox id="RIGHT">
          {boxes
            .filter((b) => b.status === "RIGHT")
            .map((b) => (
              <DraggableBox
                key={b.id}
                box={b}
                onArchiveToggle={handleArchiveToggle}
              />
            ))}
        </DroppableBox>
      </div>
    </DndContext>
  );
}
