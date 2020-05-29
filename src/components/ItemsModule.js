import React, { useState, useEffect } from "react";

import { Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const ItemsModule = () => {
  const eventHandler = (e) => {
    console.log(`output: ${e.target}`);
    e.target.name === "checkbox" && console.log(`checkbox: ${e.target.name}`);
    e.target.name === "bin" && console.log(`checkbox: ${e.target.name}`);
  };
  return (
    <div className="items-wrapper">
      <Paper>
        <ul onClick={eventHandler} className="item">
          <li name="checkbox">
            <Checkbox
              checked={true}
              color="primary"
              // inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </li>
          <li>check</li>
          <li name="bin">
            <DeleteIcon />
          </li>
        </ul>
      </Paper>
    </div>
  );
};

export default ItemsModule;
