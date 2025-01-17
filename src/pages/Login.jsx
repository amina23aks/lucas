// src/components/Login.jsx
import React, { useRef } from 'react';
import { useAuth } from '../components/AuthContext/AuthContext.jsx';
import '../styles/Login.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Simulate authentication
    const userData = {
      email: emailRef.current.value,
      name: emailRef.current.value.split('@')[0], // Simple example using email as name
    };
    
    login(userData);
    window.location.href = '/'; // Redirect to home
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
              ref={emailRef}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              required
              ref={passwordRef}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{" "}
          <a href="/register" className="link">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;