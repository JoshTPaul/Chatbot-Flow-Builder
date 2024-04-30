import { Edge, Node } from "reactflow";
import { create } from "zustand";
import { Toast } from "../types";

type State = {
  nodes: Node[];
  edges: Edge[];
  sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL";
  toast: Toast | null;
};

type Action = {
  getSelectedNode: () => Node | null;
  addNodes: (nodes: Node[]) => void;
  updateNodes: (nodes: Node[]) => void;
  addEdges: (edges: Edge[]) => void;
  updateEdges: (edges: Edge[]) => void;
  changeSidebarDisplay: (
    sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL"
  ) => void;
  createToast: (toast: Toast) => void;
};

export const useFlowBuilder = create<State & Action>((set) => {
  const changeSidebarDisplay: Action["changeSidebarDisplay"] = (
    sidebarDisplay
  ) => set({ sidebarDisplay });

  const addNodes: Action["addNodes"] = (nodes) => {
    set((state) => ({ nodes: [...state.nodes, ...nodes] }));
  };

  const updateNodes: Action["updateNodes"] = (nodes) => {
    const isNodeSelected = nodes.find((node) => node.selected);
    const sidebarDisplay = isNodeSelected ? "SETTINGS_PANEL" : "NODES_PANEL";
    set({ nodes, sidebarDisplay });
  };

  const addEdges: Action["addEdges"] = (edges) => {
    set((state) => ({ edges: [...state.edges, ...edges] }));
  };

  const updateEdges: Action["updateEdges"] = (edges) => set({ edges });

  const getSelectedNode: Action["getSelectedNode"] = () => {
    const state = useFlowBuilder.getState();
    return state.nodes.find((node) => node.selected) || null;
  };

  const createToast: Action["createToast"] = (toast) => set({ toast });

  const state: State = {
    nodes: [],
    edges: [],
    sidebarDisplay: "NODES_PANEL",
    toast: null,
  };

  const actions: Action = {
    changeSidebarDisplay,
    addNodes,
    updateNodes,
    addEdges,
    updateEdges,
    getSelectedNode,
    createToast,
  };

  return {
    ...state,
    ...actions,
  };
});
