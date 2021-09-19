var express = require("express");
var router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
router.use(cors());
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Get: login");
  res.render("login", { message: "" });
});

/* Post home page. */
router.post("/", function (req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("Post : login");
  var email = req.body.email;
  var manager = req.body.manager;
  var password = req.body.password;
  console.log("email " + email);
  console.log("manager " + manager);
  console.log("password " + password);
  var sql =
    "SELECT password FROM `users2` WHERE `email`='" +
    email +
    "'";
  console.log("sql: " +sql); 
  db.query(sql, function async (err, results) {
  if (err) throw err;
  console.log("results.length = " +results.length);
  console.log("results.password = " +results[0].password);
  console.log("results.body = " +password);
      if (results.length) {
        // check user password with hashed password stored in the database
        const validPassword =  bcrypt.compareSync(password, results[0].password);
        if (validPassword) {
          console.log("validPassword = " +validPassword);
          res.redirect("layout");
        } else {
          res.render("login" , { message: "Invalid Password" });
        }
        // req.session.userId = results[0].id;
        // req.session.first_name = results[0].first_name;
        // req.session.last_name = results[0].last_name;
        // req.session.sesa_no1 = sesa_no1;
        // req.session.myDateCookies = new Date();
        // req.session.mySupplierCookies = "Mucha";

      } else {
        message = "Złe dane logowania (email lub hasło)";
        res.render("login", {
          message: message,
        });
      }
    
  })
  // res.render("login", { title: "" });
});

module.exports = router;
