import "reactflow/dist/style.css";

import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Canvas />
        <Sidebar />
      </main>
    </>
  );
};

export default App;
