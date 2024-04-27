import { createContext, useContext, useReducer } from "react";
import {
  FlowBuilderActions,
  FlowBuilderContextState,
  FlowBuilderContextValue,
  ProviderProps,
} from "./types";

const INITIAL_DATA: FlowBuilderContextState = {
  sidebarDisplay: "NODES_PANEL",
  selectedNode: null,
};

const Context = createContext<FlowBuilderContextValue>({
  ...INITIAL_DATA,
  onNodeClick: () => {},
  changeSidebarDisplay: () => {},
});

function reducer(state: FlowBuilderContextState, action: FlowBuilderActions) {
  switch (action.type) {
    case "CHANGE_SIDEBAR_DISPLAY":
      return {
        ...state,
        sidebarDisplay: action.payload,
      };
    case "SET_SELECTED_NODE":
      return {
        ...state,
        selectedNode: action.payload,
      };
  }
}

export function FlowProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_DATA);

  const onNodeClick: FlowBuilderContextValue["onNodeClick"] = (_, node) => {
    switch (node.type) {
      case "message":
        dispatch({ type: "SET_SELECTED_NODE", payload: node });
        dispatch({ type: "CHANGE_SIDEBAR_DISPLAY", payload: "SETTINGS_PANEL" });
        break;
      default:
      // Do nothing, for now
    }
  };

  const changeSidebarDisplay: FlowBuilderContextValue["changeSidebarDisplay"] =
    (sidebarDisplay) => {
      dispatch({ type: "CHANGE_SIDEBAR_DISPLAY", payload: sidebarDisplay });
    };

  const getProviderValue = () => {
    return { ...state, onNodeClick, changeSidebarDisplay };
  };

  return (
    <Context.Provider value={getProviderValue()}>{children}</Context.Provider>
  );
}

export const useFlowBuilder = () => useContext(Context);
