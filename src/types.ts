export type CustomNodeTypes = "message";

export type Toast = {
  type: "SUCCESS" | "ERROR";
  message: string;
  duration?: number;
};

export type MessageNodeData = {
  text: {
    label: string;
    value: string;
  };
};

// Add new node data types here to extend the flow builder
export type CustomNodeData = MessageNodeData;

export type NodesPanelItem = {
  img: JSX.Element;
  label: string;
  nodeType: CustomNodeTypes;
};
