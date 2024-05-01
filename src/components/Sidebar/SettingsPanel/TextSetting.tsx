import { ChangeEventHandler } from "react";
import { useFlowBuilder } from "../../../hooks/useFlowBuilder";

function TextSetting() {
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

export default TextSetting;
