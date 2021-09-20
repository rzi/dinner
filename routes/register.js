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
  console.log("hostname " +req.hostname)
  console.log("port " +req.port)
  
});

/* Post regisster page. */
router.post("/", function (req, res, next) {
  console.log("${req.hostname} " + `${req.hostname}`);
  var randomValue = Math.floor(Math.random() * 10000000 + 1);
  const today = new Date();
  var email = req.body.email;
  var sql = "SELECT email FROM users2 WHERE `email`=  '" + req.body.email + "'";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    if (!result.length) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        const passwordHashed = hash;
        var sql2 =
          "INSERT INTO users2 (`firstName`, `lastName`, `email`, `password`, `created`, `verification`, `active`) VALUES ('" +
          req.body.firstName +
          "','" +
          req.body.lastName +
          "','" +
          req.body.email +
          "','" +
          passwordHashed +
          "','" +
          today +
          "','" +
          randomValue +
          "','" +
          "false" +
          "')";
        console.log("sql2: " + sql2);
        db.query(sql2, function (err, result) {
          if (err) throw err;
          console.log(result);
          if (!result) {
          }
        });

        var transporter = nodemailer.createTransport({
          host: "s1.ct8.pl",
          port: 587,
          auth: {
            user: "dinner@rzi.ct8.pl",
            pass: "Dinner2021",
          },
          //debug: true, // show debug output
          logger: true, // log information in console
        });
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Serwer gotowy na wysłnie emaila");
          }
        });
        var mailOption = {
          from: "dinner@rzi.ct8.pl", // sender this is your email here
          to: `${email}`,
          subject: "Weryfikacja konta w serwisie dinner.ct8.pl",
          html: `<h1>Cześć, kliknij na link <h1><br><p> Link aktywacyjny.</p>
                  <br><a href="http://${req.hostname}/verification/?verify=${randomValue}&email=${email}">Kliknij aby aktywować twoje konto w serwisie dinner.ct8.pl</a>`,
        }; // http://localhost:3000/users should be change for external hosting (on production)
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            console.log(error);
            return;
          }
          console.log("Email sent: " + info.response);
          res.render("register", {
            registerMessage:
              "Przejdź do twojej poczty. Aby się zarejestrować potwierdź linikiem aktywacje na twojej skrzynce pocztowej",
          });
        });
      });
    } else {
      res.render("register", {
        registerMessage: "Użytkownik już o podanym mailu już istnieje!",
      });
    }
  });
});
module.exports = router;
