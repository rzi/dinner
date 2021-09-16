var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/register', function(req, res, next) {
  console.log("render register");
   // res.render('register');
});

/* Post regisster page. */
router.post('/register', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("Post : register");

});

module.exports = router;
