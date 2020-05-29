import React from "react";

import { Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const ItemsModule = ({ removeTodo, todos }) => {
  const deleteHandler = (e) => {
    const itemID = e.target.id;
    const i = todos.findIndex((x) => x.id === itemID);
    removeTodo(i);
  };

  return (
    <div className="items-wrapper" onClick={deleteHandler}>
      <Paper>
        {todos.map((x) => (
          <ul key={x.id} className="item">
            <li>
              <Checkbox color="primary" onClick={(e) => e.stopPropagation()} />
            </li>
            <li style={{ padding: "10px 0" }}>{x.name}</li>
            <li id={x.id}>
              <DeleteIcon />
            </li>
          </ul>
        ))}
      </Paper>
    </div>
  );
};

export default ItemsModule;
