var express = require("express");
var router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
router.use(cors());
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Get: login");

  res.render("login", { message: "" });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("Post : login");
  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);
  var sql = "SELECT * FROM `users2` WHERE `email`='" + email + "'";
  console.log("sql: " + sql);
  db.query(sql, function async(err, results) {
    if (err) throw err;
    console.log("results.length = " + results.length);
    console.log("results.password = " + results[0].password);
    console.log("results.body = " + password);
    if (results.length) {
      // check user password with hashed password stored in the database
      const validPassword = bcrypt.compareSync(password, results[0].password);
      if (validPassword) {
        console.log("validPassword = " + validPassword);
        req.session.id = results[0].id;
        req.session.firstName = results[0].firstName;
        req.session.lastName = results[0].lastName;
        req.session.email = results[0].email;
        req.session.dateCookies = new Date();
        console.log("req.session.email = " + req.session.email);
        res.redirect("/");
      } else {
        res.render("login", { message: "Złe hasło" });
      }
    } else {
      message = "Złe dane logowania (email lub hasło)";
      res.render("login", {
        message: message,
      });
    }
  });
});

module.exports = router;
