var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("Get: verification");
  var email = req.query.email;
  var verify = req.query.verify;
  console.log(email);
  console.log(verify);
  var sql =
    "SELECT verification FROM users2 WHERE `email`=" +
    '"' +
    email +
    '"' +
    " AND `active`= false";
  db.query(sql, function (err, result, rows, fields) {
    if (err) throw err;
    console.log("result: " + result[0].verification);

    if (result[0].verification == verify) {
      console.log("dodaj do DB");
      var sql2 =
        "UPDATE users2 SET `active` = 'true'  WHERE verification = '" +
        verify +
        "'";
      console.log("sql2: " + sql2);
      db.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result);
        if (!result) {
        }
      });
      res.render("login", {
        message: "Twój email zweryfikowany, zaloguj się!",
      });
    } else {
      res.render("login", { message: "Błąd wryfikacji email" });
    }
  });
});
module.exports = router;
