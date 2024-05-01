import { NodeTypes } from "reactflow";
import MessageIcon from "./assets/MessageIcon";
import MessageNode from "./components/Nodes/Message";
import { NodesPanelItem } from "./types";

export const CUSTOM_NODE_TYPES: NodeTypes = {
  message: MessageNode,
};

export const PANEL_ITEMS: Array<NodesPanelItem> = [
  {
    img: <MessageIcon />,
    label: "Message",
    nodeType: "message",
  },
];
