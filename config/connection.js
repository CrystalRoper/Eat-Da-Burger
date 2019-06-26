var mysql = require("mysql");
var credentials = require("./credentials.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: credentials.user,
    password: credentials.password,
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
  }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;