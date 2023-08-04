import React, { useState } from 'react';
import { debounce } from 'lodash';

import { signUpUser } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();

    setError(null);

    // Verify email and password
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    // Check that the password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Check email format using regex
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    // Call the loginUser function and handle the Promise
    signUpUser(email, password)
      .then((user) => {
        // alert success
        setSuccess('Login success!');
        console.log(user);
      })
      .catch((errorMessage) => {
        // Login failed, display error message
        setError(errorMessage);
      });
  };

  return (
    <div className="loginpage">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="login-form">
        <div className="login-form-group">
          {/* email input */}
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* password input */}
        <div className="login-form-group">
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* confirm password */}
        <div className="login-form-group">
          <label htmlFor="password" className="login-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* display error or succes */}
        {error && <p className="login-error">{error}</p>}
        {success && <p className="login-success">{success}</p>}
        {/* submit button */}
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
