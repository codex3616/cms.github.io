import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Header from "../Header/Header";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import toast, { Toaster } from "react-hot-toast";

const AdminUserProfile = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, message, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });

      // Navigate to the home page after successful login
      if (!isAuthenticated) {
        setTimeout(() => {
          navigate("/");
        }, 700);
      }
    }
  }, [dispatch, error, isAuthenticated, message, navigate]);
  return (
    <>
      <main className={styles.adminUserProfile}>
        <Header role={role} />

        <div className={styles.profile}>
          <div className={styles.svg}>
            <FaUserAlt />
          </div>
          <div className={styles.info}>
            <p>
              <span>Role :</span> {role === "user" ? "User" : "Admin"}
            </p>
            <p>
              <span>Email :</span> singhakash@gmail.com
            </p>
          </div>
          <div className={styles.logout}>
            <button onClick={logoutHandler} disabled={loading}>
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
          <div className={styles.bottom}>
            {role !== "user" ? (
              <div className={styles.create}>
                <span>Create new conferences ?</span>
                <Link to="/admin/createnewconference">Click here</Link>
              </div>
            ) : null}
            <div className={styles.back}>
              <span>Back to conferences ?</span>
              <Link to={role === "user" ? "/" : "/admin"}>Click here</Link>
            </div>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default AdminUserProfile;
