import { Node } from "reactflow";

export function getCustomNodeLabel(type: Node["type"]) {
  switch (type) {
    case "message":
      return "Message";
    default:
      return type;
  }
}
