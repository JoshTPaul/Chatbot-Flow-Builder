import { DragEvent } from "react";
import MessageIcon from "../../../assets/MessageIcon";

function Message() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="createNode message"
      onDragStart={(event) => onDragStart(event, "input")}
      draggable
    >
      <MessageIcon />
      Message
    </div>
  );
}

export default Message;
