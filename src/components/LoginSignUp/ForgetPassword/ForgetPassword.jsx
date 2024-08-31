import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
    navigate("/recoverypassword");
  };
  return (
    <>
      <section className={styles.forgetPassword}>
        <div className={styles.logo}>
          <h1>CMS</h1>
        </div>
        <form onSubmit={submitHandler}>
          <h2>Forget Password</h2>
          <input
            type="email"
            name="email"
            required
            placeholder="Emaiil"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className={styles.btn} type="submit">
            Get OTP
          </button>
          <div className={styles.home}>
            <span>Back to home ?</span> <Link to="/">Click here</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgetPassword;
