import React from 'react';
import './Signup.css';
import logo from './react.svg'; 

const Signup = () => {
  return (
    <div className="signup-container">
      <header className="signup-header">
        <img src={logo} alt="Find My Tutor Logo" className="signup-logo" />
      </header>
      <main className="signup-main">
        <h1>Create an account</h1>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <br></br>
            <input type="email" id="email" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </main>
    </div>
  );
};

export default Signup;

