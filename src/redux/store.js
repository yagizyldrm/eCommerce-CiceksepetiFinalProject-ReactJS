import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./reducers/LoginReducer";

const store = createStore(
  combineReducers({ authReducer, loginReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
