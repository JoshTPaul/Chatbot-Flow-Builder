import { Node, NodeMouseHandler } from "reactflow";
import { create } from "zustand";

type State = {
  selectedNode: Node | null;
  sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL";
};

type Action = {
  onNodeClick: NodeMouseHandler;
  changeSidebarDisplay: (
    sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL"
  ) => void;
};

export const useFlowBuilder = create<State>(() => ({
  selectedNode: null,
  sidebarDisplay: "NODES_PANEL",
}));

export const onNodeClick: Action["onNodeClick"] = (_, node) =>
  useFlowBuilder.setState((state) => {
    switch (node.type) {
      case "message":
        return { selectedNode: node, sidebarDisplay: "SETTINGS_PANEL" };
      default:
        // Do nothing, for now
        return state;
    }
  });

export const changeSidebarDisplay: Action["changeSidebarDisplay"] = (
  sidebarDisplay
) => useFlowBuilder.setState({ sidebarDisplay });
