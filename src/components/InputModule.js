import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const InputModule = () => {
  const handleInput = (e) => {
    console.log(`Input: ${e.target.value}`);
  };
  const handleSubmit = () => {
    console.log(`ADD`);
  };

  return (
    <Paper>
      <ul className="inputs">
        <li>
          <TextField onChange={handleInput} />
        </li>
        <li>
          <Button onClick={handleSubmit}>ADD</Button>
        </li>
      </ul>
    </Paper>
  );
};

export default InputModule;
