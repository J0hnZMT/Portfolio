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

// Create tables
db_conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql_queries = [ 
    "CREATE TABLE IF NOT EXISTS users (userid int(10) unsigned NOT NULL AUTO_INCREMENT, username varchar(255) DEFAULT NULL, password varchar(255) DEFAULT NULL, primary key(userid), UNIQUE KEY `username` (`username`))",
    "CREATE TABLE IF NOT EXISTS menus (menu_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, menu_type varchar(255), menu_name varchar(255), menu_link varchar(255), menu_icon varchar(255) DEFAULT NULL, primary key(menu_id))",
    "CREATE TABLE IF NOT EXISTS hero (hero_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, hero_image blob, header_1 varchar(255), header_2 varchar(255), primary key(hero_id))",
    "CREATE TABLE IF NOT EXISTS blogs (blog_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, title varchar(255) DEFAULT NULL, post longtext DEFAULT NULL, postdate datetime, primary key(blog_id))",
    "CREATE TABLE IF NOT EXISTS about (about_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, name varchar(255) DEFAULT NULL, date_of_birth datetime, address longtext, email varchar(255), phone varchar(255), description longtext, website varchar(255), primary key(about_id))",
    "CREATE TABLE IF NOT EXISTS resume (resume_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, school boolean, campany boolean, start_date date, end_date date, title varchar(255), place varchar(255), description longtext, primary key(resume_id))",
    "CREATE TABLE IF NOT EXISTS services (service_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, title varchar(255), icon varchar(255), primary key(service_id))",
    "CREATE TABLE IF NOT EXISTS skills (skill_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, skill_name varchar(255), level int(3) unsigned, primary key(skill_id))",
    "CREATE TABLE IF NOT EXISTS projects (project_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, project_name varchar(255), project_image blob, project_subheader varchar(255), primary key(project_id))",
    "CREATE TABLE IF NOT EXISTS counter (counter_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, counter_name varchar(255), counter int, primary key(counter_id))",
    "CREATE TABLE IF NOT EXISTS ads (ad_id int(10) unsigned NOT NULL AUTO_INCREMENT, userid int(10) unsigned, ad_description varchar(255), ad_link varchar(255), primary key(ad_id))",
  ];
  let iterations = sql_queries.length;
  for ( var sql of sql_queries) {
    if (!--iterations) {
      db_conection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        process.exit(1);
      });
    }
    else{
      db_conection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    }
    
  }
});
