import ReactDOM from "react-dom/client";
import App from "./App";

const mountPointId = "counter";

const mount = () => {
  let rootElement = document.getElementById(mountPointId);
  if (!rootElement) {
    rootElement = document.createElement("div");
    rootElement.id = mountPointId;
    document.body.appendChild(rootElement);
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
};

mount();
