import "reactflow/dist/style.css";

import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toast from "./components/Toast";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
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
