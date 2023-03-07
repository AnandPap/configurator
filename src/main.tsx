import React from "react";
import ReactDOM from "react-dom/client";
import Questionnaire from "./components/Questionnaire";
import "./styles/index.css";
import "./styles/buttons.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Questionnaire />
  </React.StrictMode>
);
