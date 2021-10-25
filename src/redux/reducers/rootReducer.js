import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import loginReducer from "./LoginReducer";

export default combineReducers({
  register: authReducer,
  login: loginReducer,
});
