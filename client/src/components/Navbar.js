import React from "react";
import { Link } from "react-router-dom";
import img from "../logo.png";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MANISH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="brand ">
              <Link to="/">
                <div className="count">
                  <img width={30} height={30} src={img}></img>
                  <label className="views"></label>
                </div>
              </Link>
            </div>
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/mypage">
                  My page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
