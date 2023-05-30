import React from "react";
import "../formstyle.css";
import { Link } from "react-router-dom";
export default function Loginform(props) {
  return (
    <>
      <form action="./" method="post">
        <label htmlFor="email"></label>
        <input
          type="text"
          name="email"
          placeholder="Enter the email"
          id="email"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          id="password"
        />
        <button type="submit">SUBMIT</button>
         <Link to={"/"+props.a}>{props.a}</Link>

      </form>
    </>
  );
}
