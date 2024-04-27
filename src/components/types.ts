import { Node, NodeMouseHandler } from "reactflow";

export type CustomNodeTypes = "message";
export type ProviderProps = {
  children: React.ReactNode;
};

export type FlowBuilderContextState = {
  sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL";
  selectedNode: Node | null;
};

export type FlowBuilderContextValue = FlowBuilderContextState & {
  onNodeClick: NodeMouseHandler;
  changeSidebarDisplay: (
    sidebarDisplay: "NODES_PANEL" | "SETTINGS_PANEL"
  ) => void;
};

type ActionType<T> = {
  type: T;
};

type ChangeSidebarDisplayAction = ActionType<"CHANGE_SIDEBAR_DISPLAY"> & {
  payload: FlowBuilderContextState["sidebarDisplay"];
};

type SetSelectedNodeAction = ActionType<"SET_SELECTED_NODE"> & {
  payload: Node | null;
};

export type FlowBuilderActions =
  | ChangeSidebarDisplayAction
  | SetSelectedNodeAction;
