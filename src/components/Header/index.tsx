import { getOutgoers } from "reactflow";
import { useFlowBuilder } from "../../useFlowBuilder";

function Header() {
  const { nodes, edges } = useFlowBuilder();

  const onSaveChanges = () => {
    // if this reaches 2, then it's a problem
    let unusedTargetHandleCount = 0;
    for (let i = 0; i < nodes.length; i++) {
      const outgoers = getOutgoers(nodes[i], nodes, edges);
      outgoers.length === 0 && unusedTargetHandleCount++;
      if (unusedTargetHandleCount === 2) {
        alert("Cant save");
        return;
      }
    }

    alert("Changes saved");
  };

  return (
    <header>
      <button onClick={onSaveChanges}>Save Changes</button>
    </header>
  );
}

export default Header;
