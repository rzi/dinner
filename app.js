var createError = require("http-errors");
var express = require("express");
var favicon = require("serve-favicon");
var path = require("path");
var cookieparser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql");
var session = require("express-session");
var index = require("./routes/index");
var users = require("./routes/users");
var register = require("./routes/register");
var verification = require("./routes/verification");
var manager = require("./routes/manager");
var layout = require("./routes/layout");
var create = require("./routes/create");
var login = require("./routes/login");
var resto = require("./routes/resto");
var getname = require("./routes/getname");
var order = require("./routes/order");

var app = express();
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
console.log("dirname " + __dirname);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000000 },
    name: "mySession",
  })
);
app.use(cookieparser("secret"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", users);
app.use("/register", register);
app.use("/verification", verification);
app.use("/manager", manager);
app.use("/layout", layout);
app.use("/create", create);
app.use("/login", login);
app.use("/resto", resto);
app.use("/getname", getname);
app.use("/order", order);

const connection = mysql.createConnection({
  host: "rzi.cba.pl",
  user: "Bazapi2019",
  password: "Bazapi2019",
  database: "elunch_1",
});

// działa tylko na serwerze ct8.pl
// var connection = mysql.createConnection({
//   host: "rzi.ct8.pl",
//   user: "m12289_elunchjs",
//   password: "Elunchjs2020!1",
//   database: "m12289_elunchjs",
// });
connection.connect();
global.db = connection;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3001);
