import React from "react";
import ProfilePic from "../../images/profilepic.png";
import "./style.css";

export default function About() {
  return (
    <body>
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-12">
            <h4>About Me</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 divider">
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <img src={ProfilePic} className="img-fluid" alt="profile"></img>
          </div>
          <div className="col-md-9 bio">
            <p>I am a software development program manager with over 10 years of experience directing teams of business
            analysts, developers, testers, and a variety of specialized resources towards the common goal of understanding
          customer requirements and delivering high quality products on time and within budget.</p>
            <p>To further my education and to become more proficient in my field I am learning to code so I can work more
            closely with development teams and have a more intimate understanding of what coding is like. This will enable
            me to be more granular in project planning with respect to all project constraints, most notably scope and
          schedule.</p>
            <p>I am an energetic, active person with a passion for golf, skiing, snowboarding, and playing guitar. I am
            constantly honing my skills in those areas which is the approach I take in my professional life as well.
            Whether I am researching and reading on my own or taking classes on the topic of interest, I believe constant
          learning is the best recipe for success.</p>
          </div>
        </div>
      </div>
    </body >
  )

}