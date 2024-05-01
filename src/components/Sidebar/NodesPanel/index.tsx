import { PANEL_ITEMS } from "../../../constants";
import NodeCreator from "./NodeCreator";
import { NodesPanelWrapper } from "./styles";

/*
  INFO: This component is responsible for mapping through
  the PANEL_ITEMS array and displaying the various nodes
  using the NodeCreator component.
*/
function NodesPanel() {
  return (
    <NodesPanelWrapper>
      {PANEL_ITEMS.map(({ img, label, nodeType }) => (
        <NodeCreator nodeType={nodeType} key={`nodeCreator-${nodeType}`}>
          {img}
          {label}
        </NodeCreator>
      ))}
    </NodesPanelWrapper>
  );
}

export default NodesPanel;
