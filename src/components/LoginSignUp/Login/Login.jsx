import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error, isAuthenticated, loading } = useSelector(
    (state) => state.auth
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });

      // Clear the form inputs
      setEmail("");
      setPass("");

      // Navigate to the home page after successful login
      if (isAuthenticated) {
        setTimeout(() => {
          navigate("/");
        }, 700); // 2-second delay before navigation
      }
    }
  }, [error, message, dispatch, navigate, isAuthenticated]);
  return (
    <>
      <main className={styles.login}>
        <div className={styles.logo}>
          <h1>CMS</h1>
        </div>
        <form onSubmit={submitHandler}>
          <h2>Log in</h2>
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
            name="password"
            required
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className={styles.btn} type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <Link to="/forgetpassword" className={styles.forgetPass}>
            Forget password?
          </Link>
          <div className={styles.register}>
            <span>Don't have an account ?</span>{" "}
            <Link to="/signup">Register here</Link>
          </div>
        </form>
        <Toaster />
      </main>
    </>
  );
};

export default Login;
