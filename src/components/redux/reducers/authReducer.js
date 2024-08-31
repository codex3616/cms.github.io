import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {
    isAuthenticated: !!localStorage.getItem("authToken"),
    user: null,
    error: null,
    loading: false,
    role: null,
  },
  (builder) => {
    builder
      // Login
      .addCase("loginRequest", (state) => {
        state.loading = true;
      })
      .addCase("loginSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload.message;
        state.user = action.payload.user;
        // data that is being sent or passed along with an action to the reducer. This data is typically used by the reducer to update the state of the application.
      })
      .addCase("loginFail", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })

      // Logout
      .addCase("logoutRequest", (state) => {
        state.loading = true;
      })
      .addCase("logoutSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase("logoutFail", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
      })

      // profile

      .addCase("fetchProfileRequest", (state) => {
        state.loading = true;
      })
      .addCase("fetchProfileSuccess", (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.role = action.payload.role;
        state.isAuthenticated = true;
      })
      .addCase("fetchProfileFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.role = null;
        state.isAuthenticated = false;
      })

      //clear message
      .addCase("clearMessage", (state) => {
        state.message = null;
      })

      //clear errors
      .addCase("clearError", (state) => {
        state.error = null;
      });
  }
);
