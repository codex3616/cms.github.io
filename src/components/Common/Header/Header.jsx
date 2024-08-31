import React from "react";
import styles from "./styles.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ role }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const userName = "Akash singh";
  return (
    <>
      <main className={styles.header}>
        <div className={styles.logo}>
          <h1>CMS</h1>
        </div>
        <div className={styles.profile}>
          <FaUserAlt />
          {isAuthenticated ? (
            <Link to={role === "user" ? "/profile" : "/admin/profile"}>
              {role === "user" ? userName : "Admin"}
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </main>
    </>
  );
};

export default Header;
