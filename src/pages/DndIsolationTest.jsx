import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";

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

function DroppableBox({ id, color }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: 250,
        height: 250,
        background: isOver ? "lightgreen" : color,
        border: "4px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      {id}
    </div>
  );
}

export default function DndIsolationTest() {
  const [stage, setStage] = useState(1);
  const [first, setfirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <>
    {/* handle stage + -> first to second, - -> second -> first */}
      <button on>Stage</button>
      <DndContext
        onDragEnd={(e) => {
          console.log("OVER:", e.over?.id);
        }}
      >
        <div style={{ display: "flex", gap: 40, margin: 50 }}>
          <DroppableBox id="LEFT" color="pink" />
          <DroppableBox id="RIGHT" color="skyblue" />
        </div>

        <div style={{ marginTop: 40 }}>
          <DraggableBox />
        </div>
      </DndContext>
    </>
  );
}
