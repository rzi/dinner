var express = require("express");
var router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");

//const connection = require("../database/connection");
//const connection = require("../database/connection");
router.use(cors());
process.env.SECRET_KEY = "secret";

/* GET register page. */
router.get("/", function (req, res, next) {
  console.log("Get: register");
  res.render("register", { registerMessage: "" });
});

/* Post regisster page. */
router.post("/", function (req, res, next) {
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  res.render("register", {
    registerMessage:
      "Przejdź do twojej poczty. Aby się zarejestrować potwierdź linikiem aktywacje na twojej skrzynce pocztowej",
  });
  // console.log("${req.hostname} " + `${req.hostname}`);
  // var email = req.body.email;
  // var randomValue = Math.floor(Math.random() * 10000000 + 1);
  // const today = new Date();
  // const userData = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   password: req.body.password,
  //   created: today,
  //   verification: randomValue,
  //   active: "false",
  // };

  // connection.query("SELECT * FROM users", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // userModel
  //   .findOne({
  //     where: {
  //       email: req.body.email,
  //     },
  //   // })
  //TODO bcrypt
  //.then((userModel) => {
  // if (!userModel) {
  //   bcrypt.hash(req.body.password, 10, (err, hash) => {
  //     userData.password = hash;
  //     userModel
  //       .create(userData)
  //       .then((user) => {
  //         // send email for authoirsation
  //         var transporter = nodemailer.createTransport({
  //           host: "s1.ct8.pl",
  //           port: 587,
  //           auth: {
  //             user: "dinner@rzi.ct8.pl",
  //             pass: "Dinner2021",
  //           },
  //           //debug: true, // show debug output
  //           logger: true, // log information in console
  //         });
  //         transporter.verify(function (error, success) {
  //           if (error) {
  //             console.log(error);
  //           } else {
  //             console.log("Serwer gotowy na wysłnie emaila");
  //           }
  //         });
  //         var mailOption = {
  //           from: "dinner@rzi.ct8.pl", // sender this is your email here
  //           to: `${email}`,
  //           subject: "Weryfikacja konta w serwisie efaktura (react)",
  //           html: `<h1>Cześć, kliknij na link <h1><br><p> Link aktywacyjny.</p>
  //             <br><a href="http://localhost:3000/verification/?verify=${randomValue}&email=${email}">Kliknij aby aktywować twoje konto w serwisie dinner@.rzi.ct8.pl</a>`,
  //         }; // http://localhost:3000/users should be change for external hosting (on production)
  //         transporter.sendMail(mailOption, function (error, info) {
  //           if (error) {
  //             console.log(error);
  //             return;
  //           }
  //           console.log("Email sent: " + info.response);
  //           res.send({
  //             msg: "Email z linkiem do autoryzacji wysłany został na twoją skrzynkę pocztową",
  //           });
  //         });
  //       })
  //       .catch((err) => {
  //         res.send("error: " + err);
  //       });
  //   });
  // } else {
  //   res.send({ msg: "Użytkownik już istnieje" });
  // }
  //})
  // .catch((err) => {
  //   res.send("error: " + err);
  // });
});

module.exports = router;
