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

export const useFlowBuilder = create<State & Action>((set) => {
  const onNodeClick: Action["onNodeClick"] = (_, node) => {
    switch (node.type) {
      case "message":
        set({ selectedNode: node, sidebarDisplay: "SETTINGS_PANEL" });
        break;
      default:
        // Do nothing, for now
        return;
    }
  };

  const changeSidebarDisplay: Action["changeSidebarDisplay"] = (
    sidebarDisplay
  ) => set({ sidebarDisplay });

  return {
    selectedNode: null,
    sidebarDisplay: "NODES_PANEL",
    onNodeClick,
    changeSidebarDisplay,
  };
});
