import "reactflow/dist/style.css";

import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FlowProvider } from "./components/useFlowBuilder";
import "./index.css";

const App = () => {
  return (
    <FlowProvider>
      <Header />
      <main>
        <Canvas />
        <Sidebar />
      </main>
    </FlowProvider>
  );
};

export default App;
