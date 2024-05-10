const mysql = require('mysql')
const config = require('config')

/* Connection */
var db_conection = mysql.createConnection({
    host: config.get('server.host'),
    user: config.get('server.user'),
    password: config.get('server.password'),
});

/* Create database */
db_conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  db_conection.query("CREATE DATABASE portfolio", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    process.exit(1);
  });
});
