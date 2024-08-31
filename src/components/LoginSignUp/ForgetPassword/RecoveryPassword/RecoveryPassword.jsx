import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const RecoveryPassword = () => {
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");
  const [OTP, setOTP] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    toast.dismiss();
    if (newPass1 !== newPass2) {
      toast.error("password do not match");
      return;
    }

    // Validate password length
    if (newPass1.length < 5) {
      toast.error("Password must be at least 5 characters long");
      return;
    }

    // Validate password complexity
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!passwordRegex.test(newPass1)) {
      toast.error(
        "Password must contain at least one special character and one capital letter"
      );
      return;
    }
    console.log(OTP);
    console.log(newPass1);
    console.log(newPass2);
    setOTP("");
    setNewPass1("");
    setNewPass2("");
  };
  return (
    <>
      <section className={styles.recoveryPassword}>
        <div className={styles.logo}>
          <h1>CMS</h1>
        </div>
        <form onSubmit={submitHandler}>
          <h2>Recovery Password</h2>
          <input
            type="text"
            name="OTP"
            required
            placeholder="OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <input
            type="password"
            name="newPass1"
            required
            placeholder="New Password"
            autoComplete="off"
            value={newPass1}
            onChange={(e) => setNewPass1(e.target.value)}
          />
          <input
            type="password"
            name="newPass2"
            required
            placeholder="Confirm Password"
            autoComplete="off"
            value={newPass2}
            onChange={(e) => setNewPass2(e.target.value)}
          />

          <button className={styles.btn} type="submit">
            Submit
          </button>
          <div className={styles.home}>
            <span>Back to home ?</span> <Link to="/">Click here</Link>
          </div>
        </form>
        <Toaster />
      </section>
    </>
  );
};

export default RecoveryPassword;
