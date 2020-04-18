import React from "react";
import axios from "axios";
import "./style.css"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "POST",
      url: process.env.PORT || "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {

    this.setState({ name: "", email: "", message: "" })
  }

  render() {
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
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="row form-group">
              <div className="col-md-6">
                <label id="namelabel" htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <input id="namefield" className="form-control" type="text" placeholder="Jon Snow" value={this.state.name} onChange={this.onNameChange.bind(this)}></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <label id="emailLabel" htmlFor="exampleInputEmail1">Your Email</label>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <input id="emailfield" type="email" className="form-control" aria-describedby="emailHelp" placeholder="jsnow@thewall.com" value={this.state.email} onChange={this.onEmailChange.bind(this)}></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <label id="messageLabel" htmlFor="message">Message</label>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <textarea id="messagefield" className="form-control" rows="5" placeholder="Your message here" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <button id="submitbutton" className="btn btn-primary" type="submit" title="Submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;