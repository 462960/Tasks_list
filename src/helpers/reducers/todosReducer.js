import { ADD_TODO, REMOVE_TODO } from "../action/constants";

export function todosReducer(state = [{ id: "5", name: "Bolt" }], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        },
      ];
    case REMOVE_TODO:
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}
