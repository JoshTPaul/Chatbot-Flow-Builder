import { Handle, NodeProps, Position } from "reactflow";
import MessageIcon from "../../assets/MessageIcon";
import WhatsappIcon from "../../assets/WhatsappIcon";
import { MessageNodeData } from "../../types";
import { MessageNodeWrapper } from "./styles";

type Props = NodeProps & {
  data: MessageNodeData;
};

function MessageNode({ data, selected }: Props) {
  return (
    <MessageNodeWrapper selected={!!selected}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectableStart={false}
      />
      <section className="content">
        <div className="header">
          <MessageIcon />
          <h3>Send Message</h3>
          <div className="whatsappIcon">
            <WhatsappIcon />
          </div>
        </div>
        <p>{data?.text?.value}</p>
      </section>
      <Handle
        type="source"
        position={Position.Right}
        isConnectableEnd={false}
      />
    </MessageNodeWrapper>
  );
}

export default MessageNode;
