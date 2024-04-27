import { Node, NodeMouseHandler } from "reactflow";

type CustomNodes = "message";

type SidebarState = {
  display: "NODES_PANEL" | "SETTINGS_PANEL";
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type FlowBuilderContextState = {
  sidebar: SidebarState;
  selectedNode: Node | null;
};

export type FlowBuilderContextValue = FlowBuilderContextState & {
  onNodeClick: NodeMouseHandler;
};

type ActionType<T> = {
  type: T;
};

type ChangeSidebarDisplayAction = ActionType<"CHANGE_SIDEBAR_DISPLAY"> & {
  payload: SidebarState["display"];
};

type SetSelectedNodeAction = ActionType<"SET_SELECTED_NODE"> & {
  payload: Node | null;
};

export type FlowBuilderActions =
  | ChangeSidebarDisplayAction
  | SetSelectedNodeAction;
