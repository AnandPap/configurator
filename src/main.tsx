import React from "react";
import ReactDOM from "react-dom/client";
import Questionnaire from "./components/Questionnaire";
import "./styles/index.css";
import "./styles/buttons.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <Questionnaire />
    </React.StrictMode>
  </Provider>
);
