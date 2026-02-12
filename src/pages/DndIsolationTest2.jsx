import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

function DraggableBox({ box }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: box.id,
    data: { box },
  });

  const style = {
    width: 120,
    height: 60,
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {box.name}
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

export default function DndIsolationTest2() {
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

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: 40, margin: 50 }}>
        <DroppableBox id="LEFT">
          {boxes
            .filter((b) => b.status === "LEFT")
            .map((b) => (
              <DraggableBox key={b.id} box={b} />
            ))}
        </DroppableBox>

        <DroppableBox id="RIGHT">
          {boxes
            .filter((b) => b.status === "RIGHT")
            .map((b) => (
              <DraggableBox key={b.id} box={b} />
            ))}
        </DroppableBox>
      </div>
    </DndContext>
  );
}
