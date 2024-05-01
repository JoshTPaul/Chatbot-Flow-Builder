import ArrowIcon from "../../../assets/ArrowIcon";
import { useFlowBuilder } from "../../../hooks/useFlowBuilder";
import { getCustomNodeLabel } from "../../../utils";
import { SettingsPanelWrapper } from "./styles";
import TextSetting from "./TextSetting";

/*
  INFO: This component is responsible for displaying
  the type of node selected, and its corresponding settings,
  which are defined in the node's data object.
*/
function SettingsPanel() {
  const { changeSidebarDisplay, getSelectedNode } = useFlowBuilder();

  const selectedNode = getSelectedNode();

  const onBackClick = () => {
    changeSidebarDisplay("NODES_PANEL");
  };

  const title = getCustomNodeLabel(selectedNode?.type);

  const settings = Object.keys(selectedNode?.data);

  /*
    INFO:  The settingsMap is an object which maps the settings type to 
    their corresponding component.

    Add more settings as needed.
  */
  const settingsMap: Record<string, JSX.Element> = {
    text: <TextSetting />,
  };

  return (
    <SettingsPanelWrapper>
      <div className="header">
        <span onClick={onBackClick}>
          <ArrowIcon className="backArrow" />
        </span>
        {title}
      </div>
      {settings.map((key) => settingsMap[key])}
    </SettingsPanelWrapper>
  );
}

export default SettingsPanel;
