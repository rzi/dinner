var express = require("express");
var router = express.Router();
var cookieParser = require("cookie-parser");
bodyParser = require("body-parser");
var preOrder;
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("order get cookie: ", req.signedCookies);
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log(`name ${name}`);
  console.log(`req.body ${JSON.stringify(req.body)}`);
  console.log("cookie: ", req.cookies);
  res.render("order", {
    title: "Express",
    name: name,
    title1: req.body,
    preOrder: preOrder,
  });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  console.log("Post : order");
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");

  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);
  console.log(`req.body ${JSON.stringify(req.body)}`);
  preOrder = req.body;
  console.log(
    `reOrder.dishOrder.lenght ${Object.keys(preOrder.dishOrder).length}`
  );
  console.log(`preOrder.restoName ${preOrder.restoName}`);
  for (i = 0; i < Object.keys(preOrder.dishOrder).length; i++) {
    console.log(`RestoName1 ${JSON.stringify(preOrder.dishOrder)}`);
    // console.log(`preOrder ${menu2[i][0]}`);
    // console.log(`preOrder ${menu2[i][1]}`);
    // console.log(`preOrder ${menu2[i][2]}`);
  }
  console.log(`preOrder ${preOrder}`);
  res.render("order", {
    title: "Express",
    name: name,
    title1: req.body,
    preOrder: preOrder,
  });
});
module.exports = router;
