import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_SUCESS,
  LOGIN_FAIL
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  authenticated: null,
  loading: false,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCESS:
    case LOGIN_SUCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        authenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_SUCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        authenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
