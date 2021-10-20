const INITIAL_STATE = {
  user: { email: "", password: "" },
  token: "",
  isFetching: false,
  isError: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        ...state,
        isFetching: true,
        user: {},
        isError: false,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.data,
        token: action.payload,
        isFetching: false,
        isError: false,
      };

    case "REGISTER_FAILED":
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default authReducer;
