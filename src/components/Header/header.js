import React from "react";
import "./style.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Tyler Jenkins</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="About" className="nav-link" href="index.html" title="About">About <span
              className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a id="Portfolio" className="nav-link" href="portfolio.html" title="Portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a id="Contact" className="nav-link" href="contact.html" title="Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/tdj03001" title="gitHub" target="_blank">GitHub</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/tyler-jenkins-94204a6/" title="LinkedIn"
              target="_blank">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../../Resume- Tyler Jenkins.pdf" title="resume"
              target="_blank">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}