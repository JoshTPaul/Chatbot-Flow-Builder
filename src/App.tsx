import "reactflow/dist/style.css";

import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toast from "./components/Toast";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Canvas />
        <Sidebar />
      </main>
      <Toast />
    </>
  );
};

export default App;
