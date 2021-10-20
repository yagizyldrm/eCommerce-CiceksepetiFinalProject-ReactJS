import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
