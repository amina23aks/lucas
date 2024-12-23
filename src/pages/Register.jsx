import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <p>Create your account to access all features.</p>
        <form onSubmit={submitHandler}>
          <div className="input-container">
            <input
              type="text"
              id="fullname"
              required
              ref={signupNameRef}
            />
            <label htmlFor="fullname">Full Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              required
              ref={signupEmailRef}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              required
              ref={signupPasswordRef}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <a href="/login" className="link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
