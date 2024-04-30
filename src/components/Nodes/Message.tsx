import { Handle, Position } from "reactflow";
import MessageIcon from "../../assets/MessageIcon";
import { MessageNodeWrapper } from "./styles";

function MessageNode({ data }) {
  return (
    <MessageNodeWrapper>
      <Handle
        type="target"
        position={Position.Left}
        isConnectableStart={false}
      />
      <section className="content">
        <div className="header">
          <MessageIcon />
          <h3>Send Message</h3>
          (whatsapp icon)
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
