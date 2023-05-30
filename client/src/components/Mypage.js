import React from 'react'
import img from "../eye.png";
import { Link } from "react-router-dom";
// import "../Style.js"
export default function Mypage() {
  return (
    <div >
      

    <section id="hero">
      <div clssName="hero container">
        <div>
          <h1>Hello, <span></span></h1>
          <h1>My Name is <span></span></h1>
          <h1>Manish <span></span></h1>
          <Link to="/projects" type="button" clssName="cta">Projects</Link>
        </div>
      </div>
    </section>

    <section id="projects">
      <div clssName="projects container">
        <div clssName="projects-header">
          <h1 clssName="section-title">Recent <span>Projects</span></h1>
        </div>
        <div clssName="all-projects">
          <div clssName="project-item">
            <div clssName="project-info">
              <h1>Project 1</h1>
              <h2>CALCULATOR</h2>
              <p></p>
            </div>
            <Link to="/calsi/index.html">
              <div clssName="project-img">
                <img src={img} alt="img" />
              </div>
            </Link>
          </div>
          <div clssName="project-item">
            <div clssName="project-info">
              <h1>Project 2</h1>
              <h2>SPORTS MANAGEMENT SYSTEM</h2>
              <p></p>
            </div>
            <Link to="/SPORTS/login.php">
              <div clssName="project-img">
                <img src={img} alt="img" />
              </div>
            </Link>
          </div>

          <div clssName="project-item">
            <div clssName="project-info">
              <h1>Project 3</h1>
              <h2>GYM PAYMENT MANAGEMENT</h2>
              <p></p>
            </div>
            <Link to="/gym/index.php">
              <div clssName="project-img">
                <img src={img} alt="img" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div clssName="about container">
        <div clssName="col-left">
          <div clssName="about-img">
            <img src={img} alt="myimg" />
          </div>
        </div>
        <div clssName="col-right">
          <h1 clssName="section-title">About <span>me</span></h1>
          <h2>
            Manish<br />
            Computer Science Engineering<br />
            SDMIT Ujire
          </h2>
          <h2>
            <span>R</span>elevalent <span>S</span>kills -&gt .html .css .js .php
            .java .py .cpp .c
          </h2>
          <p></p>
        </div>
      </div>
    </section>

    <section id="contact">
      <div clssName="contact container">
        <div>
          <h1 clssName="section-title">Contact <span>info</span></h1>
        </div>
        <div clssName="contact-items">
          <div clssName="contact-item">
            <div clssName="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
            </div>
            <div clssName="contact-info">
              <h1>Phone</h1>
              <h2>+91 6362111576</h2>
            </div>
          </div>
          <div clssName="contact-item">
            <div clssName="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/new-post.png"
              />
            </div>
            <div clssName="contact-info">
              <h1>Email</h1>
              <h2>minnu0371@gmail.com</h2>
            </div>
          </div>
          <div clssName="contact-item">
            <div clssName="icon">
              <img
                src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
              />
            </div>
            <div clssName="contact-info">
              <h1>Address</h1>
              <h2>karnataka , india</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <div clssName="footer container">
        <div clssName="brand">
          <h1><span>M</span>ANISH</h1>
        </div>
        <div clssName="social-icon">
          <div clssName="social-item">
            <Link to="https://www.instagram.com/ranger_mk/"
              ><img
                src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"
            /></Link>
          </div>

          <div clssName="social-item">
            <Link to="https://www.youtube.com/@real7460/featured"
              ><img src="https://img.icons8.com/bubbles/100/000000/youtube.png"
            /></Link>
          </div>
        </div>
        <p>Copyright © 2020 Manish. All rights reserved</p>
      </div>
    </section>
    </div>
  )
}
