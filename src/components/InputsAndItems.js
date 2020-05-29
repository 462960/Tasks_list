import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";

import InputModule from "./InputModule";
import ItemsModule from "./ItemsModule";

const InputsAndItems = () => {
  return (
    <div className="inputs-items-container">
      <Paper>
        <div className="inputs-items-inner-wrapper">
          <InputModule />
          <ItemsModule />
        </div>
      </Paper>
    </div>
  );
};

export default InputsAndItems;
