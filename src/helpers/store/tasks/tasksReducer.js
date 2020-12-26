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
const addOneMoreTask = (state, { name }) => (
  [
    ...state,
    {
      id: v4(),
      name,
      checked: false
    }
  ]
);

const deleteTask = (state, { i }) => (
  [
    ...state.slice(0, i),
    ...state.slice(i + 1)
  ]
);

const toggleTask = (state, { id }) => {
  state.map(item => item.id === id && (item.checked = !item.checked));
  return [...state]
}


// ----------- Hook ---------

export const tasksReducer = createReducer(INITIAL_STATE, {
  [ActionTypes.ADD_TASK]: addOneMoreTask,
  [ActionTypes.REMOVE_TASK]: deleteTask,
  [ActionTypes.TOGGLE_CHECK]: toggleTask,
})