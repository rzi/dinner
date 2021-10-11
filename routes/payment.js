var express = require("express");
var router = express.Router();
var cookieParser = require("cookie-parser");
bodyParser = require("body-parser");
var payment;
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("order get cookie: ", req.signedCookies);
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log(`name ${name}`);
  console.log(`req.body ${JSON.stringify(req.body)}`);
  console.log("cookie: ", req.cookies);
  res.render("payment", {
    name: name,
    payment: payment,
  });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  console.log("Post : payment");
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");

  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  payment = req.body;
  console.log(`Payment ${JSON.stringify(req.body)}`);

  res.render("payment", {
    name: name,
    payment: payment,
  });
});
module.exports = router;
