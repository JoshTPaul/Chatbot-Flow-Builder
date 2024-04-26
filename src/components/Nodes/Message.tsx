import { Handle, Position } from "reactflow";
import MessageIcon from "../../assets/MessageIcon";
import { MessageNodeWrapper } from "./styles";

function MessageNode() {
  return (
    <MessageNodeWrapper>
      <Handle type="target" position={Position.Left} />
      <section className="content">
        <div className="header">
          <MessageIcon />
          <h3>Send Message</h3>
          (whatsapp icon)
        </div>
        <p>Text content</p>
      </section>
      <Handle type="source" position={Position.Right} />
    </MessageNodeWrapper>
  );
}

export default MessageNode;
