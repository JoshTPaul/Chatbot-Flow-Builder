import { getOutgoers } from "reactflow";
import { useFlowBuilder } from "../../hooks/useFlowBuilder";

function Header() {
  const { nodes, edges, createToast } = useFlowBuilder();

  const onSaveChanges = () => {
    // For a happy flow, there can only be 0 or 1 unused target handles
    // If there are 2 or more unused target handles, then the flow cannot be saved.
    let unusedTargetHandleCount = 0;
    for (let i = 0; i < nodes.length; i++) {
      const outgoers = getOutgoers(nodes[i], nodes, edges);
      outgoers.length === 0 && unusedTargetHandleCount++;
      if (unusedTargetHandleCount === 2) {
        createToast({
          type: "ERROR",
          message: "Cannot save flow",
        });
        return;
      }
    }

    createToast({
      type: "SUCCESS",
      message: "Flow saved successfully",
    });
  };

  return (
    <header>
      <button onClick={onSaveChanges}>Save Changes</button>
    </header>
  );
}

export default Header;
