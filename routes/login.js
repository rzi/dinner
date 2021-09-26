var express = require("express");
var router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
cookieParser = require("cookie-parser");

router.use(cors());
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Get: login");
  console.log("cookie: ", req.cookies);

  res.render("login", { message: "" });
});

/* Post home page. */
router.post("/", function (req, res, next) {
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
    if (results.length > 0) {
      // check user password with hashed password stored in the database
      const validPassword = bcrypt.compareSync(password, results[0].password);
      if (validPassword) {
        console.log("validPassword = " + validPassword);

        let options = {
          maxAge: 600000, // would expire after 1 minutes
          httpOnly: true,
          signed: true,
          secret: "secret",
        };
        res.cookie("name", results[0].firstName, options);

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
