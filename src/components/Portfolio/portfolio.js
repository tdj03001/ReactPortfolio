import React from "react";
import DayPlanner from "../../images/dayPlanner.png";
import WeatherDashboard from "../../images/WeatherDashboard.png";
import EatDaBurger from "../../images/EatDaBurgerScreenshot.png";
import NoteTaker from "../../images/expressNoteTakerScreenshot.png";
import BillboardFinder from "../../images/billboardFinderScreenshot.png";
import RockPaperScissors from "../../images/Rock Paper Scissors.png";
import Vacationer from "../../images/vacationer-screenshot.png";

import "./style.css";


export default function Portfolio() {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">
          <h4>Portfolio</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11 divider">
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <div id="dayplanner" className="card">
            <a href="https://tdj03001.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer"><img id="dayplannerimg"
              src={DayPlanner} className="card-img-top image-fluid" height="240px"
              alt="day planner"></img></a>
            <div className="card-body">
              <a href="https://tdj03001.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Day Planner App</p>
              </a>
              <a href="https://github.com/tdj03001/Day-Planner" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Day Planner GitHub</p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div id="weatherDashboard" className="card">
            <a href="https://tdj03001.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer"><img
              src={WeatherDashboard} className="card-img-top image-fluid" height="240px"
              alt="weather dashboard"></img></a>
            <div className="card-body">
              <a href="https://tdj03001.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Weather Dashboard App</p>
              </a>
              <a href="https://github.com/tdj03001/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Weather Dashboard GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <div id="eatDaBurger" className="card">
            <a href="https://warm-basin-45502.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img
              src={EatDaBurger} className="card-img-top image-fluid" height="240px"
              alt="Eat Da Burger app"></img></a>
            <div className="card-body">
              <a href="https://warm-basin-45502.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Eat Da Burger App</p>
              </a>
              <a href="https://github.com/tdj03001/EatDaBurger" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Eat Da Burger GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div id="expressNoteTaker" className="card">
            <a href="https://upennnotetaker.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="expressnotetakerimg"
              src={NoteTaker} className="card-img-top image-fluid" height="240px"
              alt="Note Taker App screenshot"></img></a>
            <div className="card-body">
              <a href="https://upennnotetaker.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <p className="card-text"> Note Taker App</p>
              </a>
              <a href="https://github.com/tdj03001/Note-Taker" target="_blank" rel="noopener noreferrer">
                <p className="card-text"> Note Taker GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-md-5">
          <div id="billboard" className="card">
            <a href="https://tdj03001.github.io/BillboardFinderUSCensusAPI/" target="_blank" rel="noopener noreferrer"><img
              src={BillboardFinder} className="card-img-top image-fluid" height="240px"
              alt="Billboard Finder app"></img></a>
            <div className="card-body">
              <a href="https://dp95000.github.io/group-project-1/" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Billboard Finder App</p>
              </a>
              <a href="https://github.com/dp95000/group-project-1" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Billboard Finder GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div id="rockpaperscissorscard" className="card">
            <a href="https://tdj03001.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer"><img
              src={RockPaperScissors} className="card-img-top image-fluid" height="240px"
              alt="Rock Paper Scissors"></img></a>
            <div className="card-body">
              <a href="https://tdj03001.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer">
                <p className="card-text"> Rock Paper Scissors App</p>
              </a>
              <a href="https://github.com/tdj03001/RockPaperScissors" target="_blank" rel="noopener noreferrer">
                <p className="card-text"> Rock Paper Scissors GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <div id="vacationer" className="card">
            <a href="https://jamesnicktyler.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="vacationerimg"
              src={Vacationer} className="card-img-top image-fluid" height="240px"
              alt="vacationer"></img></a>
            <div className="card-body">
              <a href="https://jamesnicktyler.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Vacationer App</p>
              </a>
              <a href="https://github.com/tdj03001/VacationPlanner" target="_blank" rel="noopener noreferrer">
                <p className="card-text">Vacationer GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}