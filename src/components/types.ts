export type CustomNodeTypes = "message";

export type Toast = {
  type: "SUCCESS" | "ERROR";
  message: string;
  duration?: number;
};
