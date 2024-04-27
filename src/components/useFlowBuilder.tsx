import { createContext, useContext, useReducer } from "react";
import { NodeMouseHandler } from "reactflow";
import {
  FlowBuilderActions,
  FlowBuilderContextState,
  FlowBuilderContextValue,
  ProviderProps,
} from "./types";

const INITIAL_DATA: FlowBuilderContextState = {
  sidebar: {
    display: "NODES_PANEL",
  },
  selectedNode: null,
};

const Context = createContext<FlowBuilderContextValue>({
  ...INITIAL_DATA,
  onNodeClick: () => {},
});

function reducer(state: FlowBuilderContextState, action: FlowBuilderActions) {
  switch (action.type) {
    case "CHANGE_SIDEBAR_DISPLAY":
      return {
        ...state,
        sidebar: { ...state.sidebar, display: action.payload },
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

  const onNodeClick: NodeMouseHandler = (_, node) => {
    console.log("from provider ---> node", node);
  };

  const getProviderValue = () => {
    return { ...state, onNodeClick };
  };

  return (
    <Context.Provider value={getProviderValue()}>{children}</Context.Provider>
  );
}

export const useFlowBuilder = () => {
  return useContext(Context);
};
