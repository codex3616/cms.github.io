import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleConfMenu = ({ title, id, activeConfId, setActiveConfId, role }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <main className={styles.singleConf}>
        <div className={styles.link}>
          {isAuthenticated ? (
            <Link
              to={
                role === "user"
                  ? `/conference/${id}`
                  : `/admin/conference/${id}`
              }
              onClick={() => {
                setActiveConfId(id);
              }}
            >
              {title}

              {activeConfId === id && (
                <span className={styles.indicator}></span>
              )}
            </Link>
          ) : (
            <Link to="/login">
              {title}
              {activeConfId === id && (
                <span className={styles.indicator}></span>
              )}
            </Link>
          )}
        </div>
      </main>
    </>
  );
};

export default SingleConfMenu;
