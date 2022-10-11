import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Popis from "./Popis.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Popis />
    <App />
  </React.StrictMode>
);
