import axios from "axios";

const registerPending = () => ({
  type: "REGISTER_PENDING",
});

const registerSuccess = (data) => ({
  type: "REGISTER_SUCCESS",
  payload: data,
});

const registerFailed = (error) => ({
  type: "REGISTER_FAILED",
  payload: error,
});

const authRegisterAction = (user) => async (dispatch) => {
  dispatch(registerPending());
  return await axios
    .post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signup", user)
    .then((response) => {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("email", user.email);
      dispatch(registerSuccess(response.data.access_token));
    })
    .catch((error) => {
      dispatch(registerFailed(error));
      alert("Lütfen Geçerli bir Email ve Şifre Girin");
    });
};

export default authRegisterAction;
