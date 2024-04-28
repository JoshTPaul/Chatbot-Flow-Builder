import { changeSidebarDisplay } from "../../../useFlowBuilder";
import { SettingsPanelWrapper } from "./styles";

function Item() {
  return (
    <section>
      Text
      <textarea placeholder="Text" rows={2} />
    </section>
  );
}

function SettingsPanel() {
  const onBackClick = () => {
    changeSidebarDisplay("NODES_PANEL");
  };

  return (
    <SettingsPanelWrapper>
      <div className="header">
        <span onClick={onBackClick}>&#8592;</span>
        Node Type
      </div>
      <Item />
    </SettingsPanelWrapper>
  );
}

export default SettingsPanel;
