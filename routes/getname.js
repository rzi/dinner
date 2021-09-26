var express = require("express");
var router = express.Router();
// var cookieParser = require("cookie-parser");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("index get cookie: ", req.signedCookies);
  var name = "";
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log(`name ${name}`);

  var sql = "SELECT name FROM `resto` WHERE 1";
  console.log("sql: " + sql);
  db.query(sql, function async(err, results) {
    if (err) throw err;
    console.log(`results ${JSON.stringify(results)}`);
    res.json(results);
    //res.end();
  });

  //res.render("index", { title: "Express", name: name });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  console.log("Post : index");
  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);

  res.render("index", { title: "Express" });
});

module.exports = router;
