import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    toast.dismiss();

    // Validate password length
    if (pass.length < 5) {
      toast.error("Password must be at least 5 characters long");
      return;
    }

    // Validate password complexity
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!passwordRegex.test(pass)) {
      toast.error(
        "Password must contain at least one special character and one capital letter"
      );
      return;
    }
    console.log(name);
    console.log(email);
    console.log(pass);
    setName("");
    setEmail("");
    setPass("");
  };
  return (
    <>
      <main className={styles.signUp}>
        <div className={styles.logo}>
          <h1>CMS</h1>
        </div>
        <form onSubmit={submitHandler}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pass"
            required
            placeholder="Password"
            autoComplete="off"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className={styles.btn} type="submit">
            Sign Up
          </button>

          <div className={styles.register}>
            <span>Already have an account ?</span>{" "}
            <Link to="/">LogIn here</Link>
          </div>
        </form>
        <Toaster />
      </main>
    </>
  );
};

export default SignUp;
