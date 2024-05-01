import { DragEvent, useCallback, useRef, useState } from "react";
import ReactFlow, {
  Connection,
  Edge,
  MarkerType,
  ReactFlowInstance,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import { CUSTOM_NODE_TYPES } from "../../constants";
import { useFlowBuilder } from "../../hooks/useFlowBuilder";
import { getCustomNodeLabel } from "../../utils";

let id = 0;
const getId = () => `dndnode_${id++}`;

function Canvas() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<
    any,
    any
  > | null>(null);

  const { nodes, addNodes, updateNodes, edges, addEdges, updateEdges } =
    useFlowBuilder();

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      addEdges(
        addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          edges
        )
      ),
    []
  );

  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    []
  );

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      // and whether the reactFlowInstance exists
      if (typeof type === "undefined" || !type || !reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: {
          label: getCustomNodeLabel(type),
          text: {
            label: "Text",
            value: "Text Content",
          },
        },
      };

      addNodes([newNode]);
    },
    [reactFlowInstance]
  );

  return (
    <>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={(changes) =>
              updateNodes(applyNodeChanges(changes, nodes))
            }
            onEdgesChange={(changes) =>
              updateEdges(applyEdgeChanges(changes, edges))
            }
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            nodeTypes={CUSTOM_NODE_TYPES}
          />
        </div>
      </ReactFlowProvider>
    </>
  );
}

export default Canvas;
