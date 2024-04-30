import { ChangeEventHandler } from "react";
import ArrowIcon from "../../../assets/ArrowIcon";
import { useFlowBuilder } from "../../../hooks/useFlowBuilder";
import { getCustomNodeLabel } from "../../../utils";
import { SettingsPanelWrapper } from "./styles";

function Item() {
  const { nodes, updateNodes, getSelectedNode } = useFlowBuilder();
  const selectedNode = getSelectedNode();

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newNodes = nodes.map((node) => {
      if (node.selected) {
        return {
          ...node,
          data: {
            ...node.data,
            text: {
              value: e.target.value,
            },
          },
        };
      } else return node;
    });

    updateNodes(newNodes);
  };

  return (
    <section>
      Text
      <textarea
        placeholder="Text"
        rows={2}
        value={selectedNode?.data?.text?.value}
        onChange={onChange}
      />
    </section>
  );
}

function SettingsPanel() {
  const { changeSidebarDisplay, getSelectedNode } = useFlowBuilder();

  const selectedNode = getSelectedNode();

  const onBackClick = () => {
    changeSidebarDisplay("NODES_PANEL");
  };

  const title = getCustomNodeLabel(selectedNode?.type);

  return (
    <SettingsPanelWrapper>
      <div className="header">
        <span onClick={onBackClick}>
          <ArrowIcon className="backArrow" />
        </span>
        {title}
      </div>
      <Item />
    </SettingsPanelWrapper>
  );
}

export default SettingsPanel;
