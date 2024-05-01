import { useFlowBuilder } from "../../hooks/useFlowBuilder";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";
/*
  INFO: This sidebar component is responsible for displaying
  various components based on the sidebarDisplay state.

  The sidebarDisplay state can be extended to show different 
  components later on.
*/
function Sidebar() {
  const { sidebarDisplay } = useFlowBuilder();

  const getSidebarDisplay = () => {
    switch (sidebarDisplay) {
      case "SETTINGS_PANEL":
        return <SettingsPanel />;
      case "NODES_PANEL":
      default:
        return <NodesPanel />;
    }
  };

  return <aside>{getSidebarDisplay()}</aside>;
}

export default Sidebar;
