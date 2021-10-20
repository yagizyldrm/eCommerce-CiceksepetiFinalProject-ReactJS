import axios from "axios";
import { toast } from "react-toastify";

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
      toast("Kayıt Olunuyor...", { position: toast.POSITION.BOTTOM_CENTER });
      dispatch(registerSuccess(response.data.access_token));
    })
    .catch((error) => dispatch(registerFailed(error)));
};

export default authRegisterAction;

// export async function authRegisterAction(user) {
//   return await axios
//     .post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signup", user)
//     .then((response) => {
//       const token = response.data.access_token;
//       console.log(token);
//       console.log("axios içi", user);
//     });
// }
