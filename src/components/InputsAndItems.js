import React from "react";

import Paper from "@material-ui/core/Paper";

import InputModule from "./InputModule";
import ItemsModule from "./ItemsModule";

const InputsAndItems = ({ addTodo, removeTodo, todos, toggleCheck }) => {
  return (
    <div className="inputs-items-container">
      <Paper>
        <div className="inputs-items-inner-wrapper">
          <InputModule addTodo={addTodo} />
          <ItemsModule
            removeTodo={removeTodo}
            todos={todos}
            toggleCheck={toggleCheck}
          />
        </div>
      </Paper>
    </div>
  );
};

export default InputsAndItems;
