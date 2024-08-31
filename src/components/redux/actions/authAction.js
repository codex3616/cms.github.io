import axios from "axios";
import { server } from "../store";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await axios.post(
      `${server}/api/login`,
      { email, password },
      { withCredentials: true }
    );

    if (data.success) {
      // If login is successful, dispatch loginSuccess with user and message
      dispatch({
        type: "loginSuccess",
        payload: {
          user: data.data, // User data from the backend
          message: data.message, // Success message from the backend
        },
      });

      // Store token in localStorage
      localStorage.setItem("authToken", data.token);
    } else {
      // If login is not successful, dispatch loginFail with the error message
      dispatch({
        type: "loginFail",
        payload: data.message, // Error message from the backend
      });
    }
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message || "Something went wrong.",
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get(`${server}/api/logout`, {
      withCredentials: true,
    });
    if (data.success) {
      dispatch({
        type: "logoutSuccess",
        payload: data.message,
      });

      // remove token from localstorage
      localStorage.removeItem("authToken");
    } else {
      dispatch({
        type: "logoutFail",
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message || "Something went wrong.",
    });
  }
};

export const fetchProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "fetchProfileRequest",
    });

    const { data } = await axios.get(`${server}/api/profile`, {
      withCredentials: true,
    });

    if (data.success) {
      dispatch({
        type: "fetchProfileSuccess",
        payload: data.data,
      });
    } else {
      dispatch({
        type: "fetchProfileFail",
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: "fetchProfileFail",
      payload: error.response.data.message || "Something went wrong.",
    });
  }
};
