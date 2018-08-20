var mysql = require('mysql'),
moment = require('moment'),
mysqlUtils =require('./config/connections');

//Set datas of connection
var con = mysql.createConnection({host: mysqlUtils.connections.mysql.host, user: mysqlUtils.connections.mysql.user, password: mysqlUtils.connections.mysql.password, multipleStatements: true});

//Connection created
con.connect(function(err) {
  if (err) {
    throw err;
  };
});

//Create database and table
con.query("CREATE DATABASE waterline_orm; USE waterline_orm; CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255), email VARCHAR(255), message VARCHAR(255),creat_at DATETIME,PRIMARY KEY (id))",   function(err, result) {
  if (err) {
    throw err;
  };
});
var sqlcreate="USE waterline_orm; CREATE TABLE unique_users (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255), email VARCHAR(255), creat_at DATETIME,PRIMARY KEY (id))";
con.query(sqlcreate,function(err, result) {
  if (err) {
    throw err;
  };
});
//Fill table in with some users
var sqlInto = "USE waterline_orm; INSERT INTO users (name, email,message,creat_at) VALUES ?";
var sqlIntoUniq = "USE waterline_orm; INSERT INTO unique_users (name, email,creat_at) VALUES ?";
var values = [['Demian', 'Demon@hello.com','hello world! ',moment(new Date()).format('YYYY-MM-DD HH:mm:ss')],['John', 'Doe@John.com','a node',moment(new Date()).format('YYYY-MM-DD HH:mm:ss')],['Mark', 'Pontus@Mark.com','nice to meet you',moment(new Date()).format('YYYY-MM-DD HH:mm:ss')]];
var values1 = [['Demian', 'Demon@hello.com',moment(new Date()).format('YYYY-MM-DD HH:mm:ss')],['John', 'Doe@John.com',moment(new Date()).format('YYYY-MM-DD HH:mm:ss')],['Mark', 'Pontus@Mark.com',moment(new Date()).format('YYYY-MM-DD HH:mm:ss')]];

con.query(sqlInto, [values], function(err, result) {
  if (err) {
    throw err;
  };
  console.log("3 record for user inserted");
});
con.query(sqlIntoUniq, [values1], function(err, result) {
  if (err) {
    throw err;
  };
  console.log("3 record for unique_user inserted");
});

con.end();
