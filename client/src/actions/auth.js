import axios from "axios";
import {
  REGISTER_SUCESS,
  REGISTER_FAIL,
  LOGIN_SUCESS,
  LOGIN_FAIL
} from "./types";

export const signup = user => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/users/signup", user, config);

    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = user => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/users/signin", user, config);
    dispatch({ type: LOGIN_SUCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};
