var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mysql.ct8.pl",
  user: "m12289_elunchjs",
  password: "Elunchjs2020!1",
  database: "m12289_elunchjs",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//global.db = connection;

module.exports = connection;
