import { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

function DraggableBox() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "drag-box",
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
      DRAG ME
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
        height: 250,
        background: isOver ? "lightgreen" : "#eee",
        border: "4px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {id}
      {children}
    </div>
  );
}

export default function DndIsolationTest1() {
  const [status, setStatus] = useState("LEFT");

  function handleDragEnd(event) {
    const { over } = event;
    if (!over) return;

    console.log("Dropped into:", over.id);
    setStatus(over.id);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: 40, margin: 50 }}>
        <DroppableBox id="LEFT">
          {status === "LEFT" && <DraggableBox />}
        </DroppableBox>

        <DroppableBox id="RIGHT">
          {status === "RIGHT" && <DraggableBox />}
        </DroppableBox>
      </div>
    </DndContext>
  );
}
