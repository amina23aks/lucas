import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <p>Welcome back! Please login to your account.</p>
        <form onSubmit={submitHandler}>
          <div className="input-container">
            <input
              type="email"
              id="email"
              required
              ref={loginNameRef}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              required
              ref={loginPasswordRef}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Don’t have an account?{" "}
          <a href="/register" className="link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
