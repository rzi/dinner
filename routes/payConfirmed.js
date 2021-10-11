var express = require("express");
var router = express.Router();
var cookieParser = require("cookie-parser");
bodyParser = require("body-parser");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("PayConfirmed get cookie: ", req.signedCookies);
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log(`name ${name}`);
  console.log(`req.body ${JSON.stringify(req.body)}`);
  console.log("cookie: ", req.cookies);
  res.render("payConfirmed", {
    name: name,
  });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  console.log("Post : payConfirmed");
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");

  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);
  console.log(`req.body ${JSON.stringify(req.body)}`);

  res.render("payConfirmed", {
    name: name,
  });
});
module.exports = router;
