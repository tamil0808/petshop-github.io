

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import Signup from './Signup';
const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p> 
    </div>
  );
};

export default Login;
