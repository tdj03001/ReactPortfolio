const express = require("express");
const app = express();
const sendMail = require("./mail");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.post("/Contact", (req, res) => {
  const { email, name, message } = req.body;
  sendMail(email, name, message, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal error" });
    } else {
      res.json({ message: "Email sent!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
})