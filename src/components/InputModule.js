import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../helpers/store/tasks/tasksReducer"

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

const InputModule = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();


  const handleInput = (e) => {
    const text = e.target.value;
    setName(text.trim());
  };

  const handleSubmit = () => {
    name && dispatch(Actions.addTask(name));
    setName("");
  };

  return (
    <Paper>
      <ul className="inputs">
        <li>
          <Input onChange={handleInput} value={name} fullWidth={true} />
        </li>
        <li>
          <Button onClick={handleSubmit}>Add</Button>
        </li>
      </ul>
    </Paper>
  );
};

export default InputModule;
