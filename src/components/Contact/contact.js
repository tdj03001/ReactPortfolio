import React from "react";
import "./style.css"
import $ from "jquery";

function sendEmail() {
  var senderName = $("#namefield").val();
  var emailFrom = $("#emailfield").val();
  var emailBody = $("#messagefield").val();
  emailBody = emailBody + "%0A" + "%0A" + "Sender's Name: " + senderName + " | " + "  Sender's Email: " + emailFrom + "%0A";
  window.location.href = "mailto:tylerdjenkins123@gmail.com?&subject=Reaching%20out&body=" + emailBody;
};

export default function contact() {
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
        <form id="contact-form">
          <div className="row form-group">
            <div className="col-md-6">
              <label id="namelabel" htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <input id="namefield" className="form-control" type="text" placeholder="Jon Snow"></input>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <label id="emailLabel" htmlFor="exampleInputEmail1">Your Email</label>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <input id="emailfield" type="email" className="form-control" aria-describedby="emailHelp" placeholder="jsnow@thewall.com"></input>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <label id="messageLabel" htmlFor="message">Message</label>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <textarea id="messagefield" className="form-control" rows="5" placeholder="Your message here"></textarea>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <button id="submitbutton" className="btn btn-primary" type="submit" title="Submit" onClick={sendEmail}>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}