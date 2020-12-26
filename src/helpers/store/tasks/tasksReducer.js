import { createReducer, createActions } from 'reduxsauce'
import { v4 } from "uuid";

export const { Types: ActionTypes, Creators: Actions } = createActions(
  {
    addTask: ["name"],
    removeTask: ["i"],
    toggleCheck: ["id"]
  },
  { prefix: "TASKS_" }
)


// ----------- Initial state ---------

const INITIAL_STATE = []


// ----------- Reducer functions ---------
const addOneMoreTask = (state, action) => (
  [
    ...state,
    {
      id: v4(),
      name: action.name,
      checked: false
    }
  ]
);

const deleteTask = (state, action) => (
  [
    ...state.slice(0, action.i),
    ...state.slice(action.i + 1)
  ]
);

const toggleTask = (state, action) => {
  state.map(item => item.id === action.id && (item.checked = !item.checked));
  return [...state]
}


// ----------- Hook ---------

export const tasksReducer = createReducer(INITIAL_STATE, {
  [ActionTypes.ADD_TASK]: addOneMoreTask,
  [ActionTypes.REMOVE_TASK]: deleteTask,
  [ActionTypes.TOGGLE_CHECK]: toggleTask,
})