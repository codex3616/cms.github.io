import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/LoginSignUp/Login/Login";
import SignUp from "./components/LoginSignUp/SignUp/SignUp";
import AdminHome from "./components/AdminHome/AdminHome";
import UserHome from "./components/UserHome/UserHome";
import ForgetPassword from "./components/LoginSignUp/ForgetPassword/ForgetPassword";
import RecoveryPassword from "./components/LoginSignUp/ForgetPassword/RecoveryPassword/RecoveryPassword";
import DynamicAdminConference from "./components/AdminHome/DynamicAdminConference/DynamicAdminConference";
import AdminProfile from "./components/AdminHome/AdminProfile/AdminProfile";
import CreateConference from "./components/AdminHome/CreateConference/CreateConference";
import EditConference from "./components/AdminHome/EditConference/EditConference";
import UserProfile from "./components/UserHome/UserProfile/UserProfile";
import DynamicUserConference from "./components/UserHome/DynamicUserConf/DynamicUserConference";
import Error from "./components/Common/errorPage/Error";
import PrivateRoute from "./components/middleware/ProtectRoute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/recoverypassword" element={<RecoveryPassword />} />
          {/* User Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/conference/:id" element={<DynamicUserConference />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<PrivateRoute adminRoute={true} />}>
            <Route path="/admin" element={<AdminHome />} />
            <Route
              path="/admin/conference/:id"
              element={<DynamicAdminConference />}
            />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route
              path="/admin/createnewConference"
              element={<CreateConference />}
            />
            <Route
              path="/admin/editConference/:id"
              element={<EditConference />}
            />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
