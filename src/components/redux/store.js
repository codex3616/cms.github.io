import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
// import { userReducer } from "./reducers/userReducer";
// import { adminReducer } from "./reducers/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
    // admin: adminReducer,
  },
});

export default store;

export const server = "http://localhost:4000";
