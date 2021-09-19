var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layout", { title: "Express" });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("Post : index");
  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);

  res.render("layout", { title: "Express" });
});

module.exports = router;
