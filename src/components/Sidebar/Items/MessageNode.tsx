import { DragEvent } from "react";

function MessageNode() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="messageNode"
      onDragStart={(event) => onDragStart(event, "input")}
      draggable
    >
      icon Message Node
    </div>
  );
}

export default MessageNode;
