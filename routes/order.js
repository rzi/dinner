var express = require("express");
var router = express.Router();
// var cookieParser = require("cookie-parser");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("order get cookie: ", req.signedCookies);
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log(`name ${name}`);

  res.render("order", { title: "Express", name: name , title1: req.body});
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
  var menu = JSON.stringify(req.body);
  var menu2 = req.body;
  
  console.log(`req.body lenght ${menu2.length}`); 
  // console.log(`req.body parse ${menu2[0]}`); 
  // console.log(`req.body parse ${JSON.stringify( menu2[1])}`);
  // console.log(`req.body parse ${JSON.stringify(menu2[1][0][0])}`); 
for (i=0; i< menu2.length; i++)
{
 console.log(`req.body ${JSON.stringify(menu2[i].price)}`); 
}
  res.render("order", { title: "Express", name: name , title1: req.body});
});
module.exports = router;
