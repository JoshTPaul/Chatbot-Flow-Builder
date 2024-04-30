export type CustomNodeTypes = "message";

export type Toast = {
  type: "SUCCESS" | "ERROR";
  message: string;
  duration?: number;
};
type CustomNodeData = {
  label: string;
};

export type MessageNodeData = CustomNodeData & {
  text: {
    label: string;
    value: string;
  };
};
