import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { todosReducer } from "./reducers/todosReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ todosReducer });

export const store = createStore(rootReducer, composeWithDevTools());
