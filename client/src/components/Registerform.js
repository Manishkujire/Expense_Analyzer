import React, { useState } from "react";
// import "../formstyle.css";
import {useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Registerform() {
  const navigate=useNavigate()
  const [formData,setFromData]=useState({})
  const [message,setMessage]=useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFromData(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();    axios.post("http://localhost:5000/register",formData
    ).then((res)=>{
      console.log(res.data)
      if(res.data.authorized==true){
        navigate('/home')
      }
    })
  }

  return (
    <>
      <div className="wrapper">
        <div className="title">Signup Form</div>
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
            Have an account? <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </>
  );
}
