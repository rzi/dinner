var express = require("express");
var router = express.Router();
// var cookieParser = require("cookie-parser");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("index get cookie: ", req.signedCookies);
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log(`name ${name}`);

  res.render("order", { title: "Express", name: name });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  console.log("Post : index");
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");

  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);

  res.render("order", { title: "Express", name: name });
});

module.exports = router;
