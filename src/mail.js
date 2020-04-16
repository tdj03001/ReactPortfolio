const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "a9f16e687ca564f7731519c358fafff0-915161b7-23361fa8",
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