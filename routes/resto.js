var express = require("express");
var router = express.Router();
// var cookieParser = require("cookie-parser");
var name = "";

/* GET home page. */
router.get("/", function (req, res, next) {
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log("index get cookie: ", req.signedCookies);
  console.log(`name ${name}`);
  res.render("resto", { title: "Express", name: name, restoName });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  req.signedCookies ? (name = req.signedCookies.name) : (name = "");
  console.log("Post : resto");
  //get menu
  var restoName = req.body.restoName;
  restoName ? (restoName = req.body.restoName) : (restoName = "");
  var sql =
    "SELECT * FROM resto INNER JOIN menu ON resto.restoId = menu.restoId WHERE name = '" +
    restoName +
    "'";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        console.log(`results ${result[i].dish} i ${result[i].price}`);
      }
      res.render("resto", {
        title: "Express",
        name: name,
        menu: result,
        restoName: restoName,
      });
    } else {
      res.render("resto", {
        title: "Express",
        name: name,
        menu: result,
        restoName: restoName,
      });
    }
  });
});

module.exports = router;
