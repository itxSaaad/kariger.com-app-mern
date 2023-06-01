import axios from "axios";
import {
  ADMIN_USER_LOGIN_FAIL,
  ADMIN_USER_LOGIN_REQUEST,
  ADMIN_USER_LOGIN_SUCCESS,
  ADMIN_USER_REGISTER_FAIL,
  ADMIN_USER_REGISTER_REQUEST,
  ADMIN_USER_REGISTER_SUCCESS,
} from "../constants/adminConstants";

export const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/admin/login",
      { email, password },
      config
    );

    dispatch({
      type: ADMIN_USER_LOGIN_SUCCESS,
      payload: { user: data.user, token: data.token },
    });
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ user: data.user, token: data.token })
    );
  } catch (error) {
    dispatch({
      type: ADMIN_USER_LOGIN_FAIL,
      payload: {
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const adminRegister =
  (name, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/admin/signUp",
        { name, email, password, confirmPassword },
        config
      );

      dispatch({
        type: ADMIN_USER_REGISTER_SUCCESS,
        payload: { user: data.newUser, token: data.token },
      });
      dispatch({
        type: ADMIN_USER_LOGIN_SUCCESS,
        payload: { user: data.newUser, token: data.token },
      });
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ user: data.newUser, token: data.token })
      );
    } catch (error) {
      dispatch({
        type: ADMIN_USER_REGISTER_FAIL,
        payload: {
          status: error.response && error.response.status,
          message:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        },
      });
    }
  };