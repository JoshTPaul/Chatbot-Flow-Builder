import { Edge, Node, NodeMouseHandler } from "reactflow";
import { create } from "zustand";

type State = {
  nodes: Node[];
  edges: Edge[];
  selectedNodeId: string | null;
  sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL";
};

type Action = {
  getSelectedNode: () => Node | null;
  addNodes: (nodes: Node[]) => void;
  updateNodes: (nodes: Node[]) => void;
  addEdges: (edges: Edge[]) => void;
  updateEdges: (edges: Edge[]) => void;
  onNodeClick: NodeMouseHandler;
  changeSidebarDisplay: (
    sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL"
  ) => void;
};

export const useFlowBuilder = create<State & Action>((set) => {
  const onNodeClick: Action["onNodeClick"] = (_, node) => {
    switch (node.type) {
      case "message":
        console.log("setting message node", node.id);
        set({ selectedNodeId: node.id, sidebarDisplay: "SETTINGS_PANEL" });
        break;
      default:
        // Do nothing, for now
        return;
    }
  };

  const changeSidebarDisplay: Action["changeSidebarDisplay"] = (
    sidebarDisplay
  ) => set({ sidebarDisplay });

  const addNodes: Action["addNodes"] = (nodes) => {
    set((state) => ({ nodes: [...state.nodes, ...nodes] }));
  };

  const updateNodes: Action["updateNodes"] = (nodes) => set({ nodes });

  const addEdges: Action["addEdges"] = (edges) => {
    set((state) => ({ edges: [...state.edges, ...edges] }));
  };

  const updateEdges: Action["updateEdges"] = (edges) => set({ edges });

  const getSelectedNode: Action["getSelectedNode"] = () => {
    const state = useFlowBuilder.getState();
    return state.nodes.find((node) => node.id === state.selectedNodeId) || null;
  };

  const state: State = {
    nodes: [],
    edges: [],
    selectedNodeId: null,
    sidebarDisplay: "NODES_PANEL",
  };

  const actions: Action = {
    onNodeClick,
    changeSidebarDisplay,
    addNodes,
    updateNodes,
    addEdges,
    updateEdges,
    getSelectedNode,
  };

  return {
    ...state,
    ...actions,
  };
});
