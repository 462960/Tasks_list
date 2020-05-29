import { v4 } from "uuid";

import { ADD_TODO, REMOVE_TODO } from "./constants";

export function addTodo(name) {
  return {
    type: ADD_TODO,
    id: v4(),
    name,
  };
}

export function removeTodo(i) {
  return {
    type: REMOVE_TODO,
    i,
  };
}
