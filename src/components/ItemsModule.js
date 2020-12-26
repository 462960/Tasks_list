import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { Actions } from "../helpers/store/tasks/tasksReducer"

import { Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const ItemsModule = ({ filteredList }) => {
  const dispatch = useDispatch()
  const deleteHandler = (e) => {
    const itemID = e.target.id;
    const i = filteredList.findIndex((x) => x.id === itemID);
    dispatch(Actions.removeTask(i));
  };

  const handleCheck = (e) => {
    e.stopPropagation();
    const id = e.target.id;
    dispatch(Actions.toggleCheck(id));
  };

  return (
    <div className="items-wrapper" onClick={deleteHandler}>
      <Paper>
        {filteredList.map((x) => (
          <ul key={x.id} className="item">
            <li>
              <Checkbox
                checked={x.checked}
                id={x.id}
                color="primary"
                onClick={handleCheck}
              />
            </li>
            <li
              className={cn({ checked: x.checked })}
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
