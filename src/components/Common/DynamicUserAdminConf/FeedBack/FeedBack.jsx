import React from "react";
import styles from "./styles.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const FeedBack = ({ setFeedbackActive, feedBackActive }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    toast.dismiss();
    toast.success("Submitted...");
    setFeedbackActive(!feedBackActive);
  };
  return (
    <>
      <main className={styles.feedBack}>
        <div className={styles.modal}>
          <div className={styles.inner}>
            <h3>
              How would you rate your experience with the conference today ?
            </h3>
            <form onSubmit={submitHandler}>
              <input type="text" required />
              <button>Submit</button>
            </form>
          </div>
          <div className={styles.close}>
            <RxCross2 onClick={() => setFeedbackActive(!feedBackActive)} />
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default FeedBack;
