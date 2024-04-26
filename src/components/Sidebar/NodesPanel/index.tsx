import MessageIcon from "../../../assets/MessageIcon";
import NodeCreator from "./NodeCreator";
import { NodesPanelWrapper } from "./styles";

const PANEL_ITEMS = [
  {
    img: <MessageIcon />,
    label: "Message",
    nodeType: "message",
  },
  {
    img: <MessageIcon />,
    label: "Message",
    nodeType: "message",
  },
];

function NodesPanel() {
  return (
    <NodesPanelWrapper>
      {PANEL_ITEMS.map(({ img, label, nodeType }) => (
        <NodeCreator nodeType={nodeType}>
          {img}
          {label}
        </NodeCreator>
      ))}
    </NodesPanelWrapper>
  );
}

export default NodesPanel;
