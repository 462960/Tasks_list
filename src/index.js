import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./helpers/Root";
import { Provider } from "react-redux";
import { store } from "./helpers/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
