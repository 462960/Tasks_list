import { v4 } from "uuid";

import { ADD_TODO, REMOVE_TODO, CHECKED } from "./constants";

export function addTodo(name) {
  return {
    type: ADD_TODO,
    id: v4(),
    name,
    done: false,
  };
}

export function removeTodo(i) {
  return {
    type: REMOVE_TODO,
    i,
  };
}

export function toggleCheck(id) {
  return {
    type: CHECKED,
    id,
  };
}
