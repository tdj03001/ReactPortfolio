import React from "react";
import "./style.css"

export default function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h4>Contact</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11 divider">
        </div>
      </div>
      <div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <label id="namelabel">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input id="namefield" placeholder="John Smith"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label id="emailLabel">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input id="emailfield" placeholder="example@gmail.com"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label id="messageLabel">Message</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <textarea id="messagefield" placeholder="Your message here"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button id="submitbutton" type="submit" title="Submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}