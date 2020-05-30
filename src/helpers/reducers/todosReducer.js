import { ADD_TODO, REMOVE_TODO, TOGGLE_CHECK } from "../action/constants";

export function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          checked: action.checked,
        },
      ];
    case REMOVE_TODO:
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    case TOGGLE_CHECK: {
      state.map((x) => x.id === action.id && (x.checked = !x.checked));
      return [...state];
    }

    default:
      return state;
  }
}
