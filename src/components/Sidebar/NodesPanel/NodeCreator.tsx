import { DragEvent } from "react";
import { NodeCreatorWrapper } from "./styles";

type Props = {
  children: React.ReactNode;
  nodeType: string; // Create a new type or enum later
};

function NodeCreator({ children, nodeType }: Props) {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <NodeCreatorWrapper
      onDragStart={(event) => onDragStart(event, nodeType)}
      draggable
    >
      {children}
    </NodeCreatorWrapper>
  );
}

export default NodeCreator;
