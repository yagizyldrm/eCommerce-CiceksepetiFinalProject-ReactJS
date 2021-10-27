import axios from "axios";

const loginPending = () => ({
  type: "LOGIN_PENDING",
});

const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

const loginFailed = (error) => ({
  type: "LOGIN_FAILED",
  payload: error,
});

const authloginAction = (user) => async (dispatch) => {
  dispatch(loginPending());
  return await axios
    .post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", user) //posting the data which comes from login screen
    .then((response) => {
      localStorage.setItem("token-login", response.data.access_token);
      localStorage.setItem("email-login", user.email);
      dispatch(loginSuccess(response.data.access_token));
    })
    .catch((error) => dispatch(loginFailed(error)));
};

export default authloginAction;
