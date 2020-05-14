import React from "react";
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/About" id="About" className="nav-link" title="About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Portfolio" id="Portfolio" className="nav-link" title="Portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" id="Contact" className="nav-link" title="Contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/tdj03001" title="gitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/tyler-jenkins-94204a6/" title="LinkedIn"
              target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../../Resume-TylerJenkins.pdf" download title="resume"
              target="_blank">Resume</a>
          </li>
        </ul>
      </div>
    </nav >
  );
}