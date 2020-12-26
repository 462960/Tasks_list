import React from "react";
import "./App.scss";

import TopBar from "./components/TopBar";
import InputsAndItems from "./components/InputsAndItems";

function App(props) {
  return (
    <div>
      <TopBar />
      <InputsAndItems />
    </div>
  );
}

export default App;
