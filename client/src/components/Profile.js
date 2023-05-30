import React from 'react'
import myImage from "../myimage.png"
export default function Profile() {
  return (
    <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src={myImage} alt="myimg"/>
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>me</span></h1>
        <h2>Manish<br/>
            Computer Science Engineering<br/>
            SDMIT Ujire</h2>
            <h2><span>R</span>elevalent <span>S</span>kills -
                    .html   
                    .css    
                    .js 
                    .php    
                    .java   
                    .py 
                    .cpp   
                    .c 
                    </h2>
        <p></p>
      </div>
    </div>
  </section>
  )
}
