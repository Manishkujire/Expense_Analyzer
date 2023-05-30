import React from 'react'
import { Link } from "react-router-dom";
export default function Background() {
  return (
    <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Manish <span></span></h1>
        <Link to="#projects" type="button" className="cta">Projects</Link>
      </div>
    </div>
  </section>
  )
}
