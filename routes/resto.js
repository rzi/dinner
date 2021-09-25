var express = require("express");
var router = express.Router();
// var cookieParser = require("cookie-parser");
var name = "";


/* GET home page. */
router.get("/", function (req, res, next) {
    req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log("index get cookie: ", req.signedCookies)
  console.log(`name ${name}`);
  res.render("resto", { title: "Express", name: name });
});

/* Post home page. */
router.post("/", function (req, res, next) {
    req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log("Post : resto");
  res.render("resto", { title: "Express", name: name });
});

module.exports = router;
