import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { store } from "./store";
import { Provider } from "react-redux";
import "bulma/css/bulma.css";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
