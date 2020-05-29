import React, { useState, useEffect } from "react";
import cn from "classnames";

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
            <li data="checkbox">
              <Checkbox checked={x.done} color="primary" />
            </li>
            <li
              className={cn({ checked: x.done })}
              style={{ padding: "10px 0" }}
            >
              {x.name}
            </li>
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
