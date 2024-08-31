import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className={styles.error}>
        <div className={styles.content}>
          <h1>Oops! </h1>
          <h4>404-page not found</h4>
          <p>
            The page you are looking for might have been removed or had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/">Go to homepage</Link>
        </div>
      </main>
    </>
  );
};

export default Error;
