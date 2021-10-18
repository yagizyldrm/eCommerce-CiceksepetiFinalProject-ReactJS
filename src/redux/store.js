import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
