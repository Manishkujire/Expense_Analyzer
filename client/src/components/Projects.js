import React from 'react'
import calsi from "../calsi.png"
import gym from "../gym.jpg"
import sport from "../sport.png"


export default function Projects() {
  return (
    <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">

        <div class="project-item">
          <div class="project-info">
            <h1>Project 1</h1>
            <h2>CALCULATOR</h2>
            <p></p>
          </div>
          <a href="/calsi/index.html">
            <div class="project-img">
              <img src={calsi} alt="img"/>
            </div>
          </a>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 2</h1>
            <h2>SPORTS MANAGEMENT SYSTEM</h2>
            <p></p>
          </div>
          <a href="/SPORTS/login.php">
            <div class="project-img">
              <img src={sport} alt="img"/>
            </div>
          </a>

        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 3</h1>
            <h2>GYM PAYMENT MANAGEMENT</h2>
            <p></p>
          </div>
          <a href="/gym/index.php">
            <div class="project-img">
              <img src={gym} alt="img"/>
            </div>
          </a>

        </div>
      </div>
    </div>
  </section>
  )
}
