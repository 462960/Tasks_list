import React from "react";
import "./App.scss";

import TopBar from "./components/TopBar";
import InputsAndItems from "./components/InputsAndItems";

function App(props) {
  return (
    <div>
      <TopBar todos={props.todos} />
      <InputsAndItems {...props} />
    </div>
  );
}

export default App;
