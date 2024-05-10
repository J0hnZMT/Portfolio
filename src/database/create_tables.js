const mysql = require('mysql')
const config = require('config')

/* Database Connection */
var db_conection = mysql.createConnection({
    host: config.get('server.host'),
    user: config.get('server.user'),
    password: config.get('server.password'),
    port: config.get('server.port'),
    database: config.get('server.database')
});

/* Create the user table */
db_conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE user (id int(10) unsigned NOT NULL AUTO_INCREMENT, username varchar(255) DEFAULT NULL, password varchar(255) DEFAULT NULL, primary key(id), UNIQUE KEY `username` (`username`))";
  db_conection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    process.exit(1);
  });
});

/* Create the blogs table */
// db_conection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE blog (id int(10) unsigned NOT NULL AUTO_INCREMENT, username varchar(255) DEFAULT NULL, password varchar(255) DEFAULT NULL, primary key(id), UNIQUE KEY `username` (`username`))";
//     db_conection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//       process.exit(1);
//     });
//   });
