import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
const INITIAL_STATE = {
  token: "",
  isLoggedIn: false,
  email: "",
  password: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER":
      toast("Welcome...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      const user = jwtDecode(action.token);
      return {
        ...INITIAL_STATE,
        token: action.token,
        email: user.email,
        password: user.password,
        _id: user._id,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
