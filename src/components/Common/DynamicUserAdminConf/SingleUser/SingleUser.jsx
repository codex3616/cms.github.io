import React from "react";
import styles from "./styles.module.scss";
import { MdDeleteSweep } from "react-icons/md";

const SingleUser = ({ user }) => {
  const deleteUser = () => {
    console.log("deleted");
  };
  return (
    <>
      <main className={styles.singleUser}>
        <div className={styles.container}>
          <p>{user.name}</p>
          <MdDeleteSweep onClick={deleteUser} />
        </div>
      </main>
    </>
  );
};

export default SingleUser;
