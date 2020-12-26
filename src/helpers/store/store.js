import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { tasksReducer } from "./tasks/tasksReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ tasksReducer });

export const store = createStore(rootReducer, composeWithDevTools());
