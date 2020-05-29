import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";

import InputModule from "./InputModule";
import ItemsModule from "./ItemsModule";

const InputsAndItems = ({ addTodo, removeTodo, todos }) => {
  return (
    <div className="inputs-items-container">
      <Paper>
        <div className="inputs-items-inner-wrapper">
          <InputModule addTodo={addTodo} />
          <ItemsModule removeTodo={removeTodo} todos={todos} />
        </div>
      </Paper>
    </div>
  );
};

export default InputsAndItems;
