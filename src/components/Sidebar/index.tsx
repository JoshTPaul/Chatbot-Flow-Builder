import { useFlowBuilder } from "../../useFlowBuilderZustand";
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";

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
