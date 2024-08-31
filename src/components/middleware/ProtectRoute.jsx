// PrivateRoute.js
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../redux/actions/authAction"; // Adjust import path as needed
import Loader from "../Common/loader/Loader";

const PrivateRoute = ({ adminRoute = false }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, role, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, isAuthenticated, user]);

  if (loading) return <Loader />; // Optional: Show a loading state

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminRoute && role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
