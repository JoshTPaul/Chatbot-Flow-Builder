import { DragEvent } from "react";
import { CustomNodeTypes } from "../../../types";
import { NodeCreatorWrapper } from "./styles";

type Props = {
  children: React.ReactNode;
  nodeType: CustomNodeTypes;
};

/*
  INFO: This component is responsible for creating a new node item
  in the NodesPanel component, based on the props passed.
*/
function NodeCreator({ children, nodeType }: Props) {
  const onDragStart = (
    event: DragEvent<HTMLDivElement>,
    nodeType: CustomNodeTypes
  ) => {
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
