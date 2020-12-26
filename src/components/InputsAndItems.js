import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Users/vladimirmaxymenko/Documents/Projects/Tasks_list/src/components/InputsAndItems.js
//Users/vladimirmaxymenko/Documents/Projects/Tasks_list/src/helpers/store/tasks/tasksReducer.js
import Paper from "@material-ui/core/Paper";

import InputModule from "./InputModule";
import ItemsModule from "./ItemsModule";
import ListFiltration from "./ListFiltration";

const InputsAndItems = ({ addTodo, removeTodo, toggleCheck }) => {
  const todos = useSelector(state => state.tasksReducer.listOfTasks)
  const [filterValue, setFilterValue] = useState("all");
  const [filteredList, setFilteredList] = useState(todos);

  useEffect(() => {
    if (filterValue === "all") {
      setFilteredList(todos);
    } else if (filterValue === "checked") {
      const checkedList = todos.filter((x) => x.checked === true);
      setFilteredList(checkedList);
    } else if (filterValue === "todo") {
      const todoList = todos.filter((x) => x.checked === false);
      setFilteredList(todoList);
    }
  }, [todos, filterValue]);

  return (
    <div className="inputs-items-container">
      <Paper>
        <div className="inputs-items-inner-wrapper">
          <InputModule addTodo={addTodo} />
          {todos.length !== 0 ? (
            <ListFiltration
              setFilterValue={setFilterValue}
              filterValue={filterValue}
            />
          ) : null}

          {/* <ItemsModule
            removeTodo={removeTodo}
            filteredList={filteredList}
            toggleCheck={toggleCheck}
          /> */}
        </div>
      </Paper>
    </div>
  );
};

export default InputsAndItems;
