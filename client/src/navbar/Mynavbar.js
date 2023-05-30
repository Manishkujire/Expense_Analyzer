import "../navbar.css";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Background from "./Background";
import Count from "./Count";
import img from "../menu.png"
import Profile from "../components/Profile";
import Projects from "../components/Projects";
export default function Mynavbar() {
  const [count, setCount] = useState([{password:10}]);
  const [hamburgerState, sethamburgerState] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:5000/").then((res) => {
  //     setCount(res.data[0]);
  //     console.log(res.data[0].password)
  //   });
  // },[]);
  const changeHamburgerState=()=>{
    console.log(hamburgerState)

    if(hamburgerState==="active")
      sethamburgerState("")
    else
    sethamburgerState("active")

}

  return (
    <>
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <Link to="/">
                <h1>MANISH</h1>
                <Count count={count.password} />
              </Link>
            </div>
            <div className="nav-list">
              <div onClick={changeHamburgerState} className={`hamburger ${hamburgerState}`}>
<img src={img} alt="bar"/>             </div>
              <ul className={hamburgerState}>
                <li>
                  <Link to="/hero" data-after="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" data-after="Projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" data-after="About">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" data-after="Contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link data-after="upload">Upload-File</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Background />
      <Profile />
      {/* <Projects/> */}
    </>
  );
}
