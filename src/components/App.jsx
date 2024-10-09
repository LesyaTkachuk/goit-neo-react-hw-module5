import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigator from "src/navigation/Navigator";
import "./App.css";

function App() {
  return (
    <>
      <Navigator />
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
