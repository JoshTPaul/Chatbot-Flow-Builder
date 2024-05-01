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

/*
  INFO: A custom hook for managing the flow builder's state and actions.
  This hook can be easily extended to add more state and actions as needed.

  I chose Zustand to handle state management because:
  - I've never really tried using it before
  - React Flow is already using Zustand for state management
  - It's quite simple to use over Redux
  - I would have used React's Context API, but it was causing way too many 
    re-renders for this use case
*/
export const useFlowBuilder = create<State & Action>((set) => {
  const changeSidebarDisplay: Action["changeSidebarDisplay"] = (
    sidebarDisplay
  ) => set({ sidebarDisplay });

  const addNodes: Action["addNodes"] = (nodes) => {
    set((state) => ({ nodes: [...state.nodes, ...nodes] }));
  };

  /*
    INFO: Since apps like Figma also open their "node" settings
    on click and on drag, I'm setting the sidebar display to "SETTINGS_PANEL"
    when a node is selected here, since this function will fire on both click and drag
  */
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
