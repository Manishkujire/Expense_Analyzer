import React, { useState } from "react";
import "../formstyle.css";
import { Link } from "react-router-dom";
export default function Loginpage() {
  const [formData, setFromData] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFromData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input type="email" required name="email"
            value={formData.email || ""} 
          onChange={handleChange}/>
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required name="password"
            value={formData.password || ""}
            onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <Link to="#">Forgot password?</Link>
            </div>
          </div>
          <div className="field">
            <input type="submit" />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/register">Signup now</Link>
          </div>
        </form>
      </div>
  );
}
