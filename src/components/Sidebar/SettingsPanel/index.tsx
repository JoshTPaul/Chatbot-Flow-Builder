import { ChangeEventHandler } from "react";
import { useFlowBuilder } from "../../../useFlowBuilder";
import { SettingsPanelWrapper } from "./styles";

function Item() {
  const { nodes, updateNodes, getSelectedNode, selectedNodeId } =
    useFlowBuilder();
  const selectedNode = getSelectedNode();

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newNodes = nodes.map((node) => {
      if (selectedNodeId === node.id) {
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

  return (
    <SettingsPanelWrapper>
      <div className="header">
        <span onClick={onBackClick}>&#8592;</span>
        {selectedNode?.type}
      </div>
      <Item />
    </SettingsPanelWrapper>
  );
}

export default SettingsPanel;
