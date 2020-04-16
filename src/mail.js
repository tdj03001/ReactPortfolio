const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: "sandbox305b02bf928e4d7b974665b8e41f301b.mailgun.org"
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, name, message, cb) => {
  const mailOptions = {
    senderemail: email,
    sendername: name,
    to: "tylerdjenkins123@gmail.com",
    subject: "Message from portfolio visitor",
    message: message
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

module.exports = sendMail;