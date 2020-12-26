import { createReducer, createActions } from 'reduxsauce'
import { v4 } from "uuid";

export const { Types: ActionTypes, Creators: Actions } = createActions(
  {
    addTask: ["name"]
  },
  { prefix: "TASKS" }
)


// ----------- Initial state ---------

const INITIAL_STATE = {
  listOfTasks: [{
    id: 16,
    name: "test task",
    checked: false
  }]
}

// ----------- Reducer functions ---------
const addOneMoreTask = (state, action) => ({
  listOfTasks: [
    ...state.listOfTasks,
    {
      id: v4(),
      name: action.name,
      checked: false
    }
  ]
})

// ----------- Hook ---------

export const tasksReducer = createReducer(INITIAL_STATE, {
  [ActionTypes.ADD_TASK]: addOneMoreTask
})