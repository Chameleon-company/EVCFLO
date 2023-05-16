import React, { useState } from "react";
import { loginUser } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Call the loginUser function and handle the Promise
    loginUser(email, password)
      .then((user) => {
        // alert success
        setSuccess("Login success!");
      })
      .catch((errorMessage) => {
        // Login failed, display error message
        setError(errorMessage);
      });
  };

  return (
    <div className="loginpage">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-form-group">
          <label htmlFor="email" className="login-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password" className="login-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        {success && <p className="login-success">{success}</p>}
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
