const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require("path");
let app = express();
require("dotenv").config();

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: 'tylerdjenkins123@gmail.com',
    subject: 'New Message from Contact Form on react portfolio',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/public'));


app.use(cors())
app.use('*', router)
app.listen(3002)
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

