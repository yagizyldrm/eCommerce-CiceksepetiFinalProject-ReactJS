import axios from "axios";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";

export const authRegisterAction = (user) => {
  return (dispatch) => {
    axios
      .post(
        "https://bootcampapi.techcs.io/api/fe/v1/authorization/signup",
        user
      )
      .then((response) => {
        console.log(response.data.access_token);
        dispatch({
          type: "REGISTER",
          payload: action.payload,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
