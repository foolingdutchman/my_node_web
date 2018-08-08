var mysql = require('mysql'),
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
con.query("CREATE DATABASE waterline_orm; USE waterline_orm; CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255), email VARCHAR(255), message VARCHAR(255),PRIMARY KEY (id))",   function(err, result) {
  if (err) {
    throw err;
  };
});

//Fill table in with some users
var sqlInto = "USE waterline_orm; INSERT INTO users (name, email,message) VALUES ?";
var values = [['Demian', 'Demon@hello.com','hello world! '],['John', 'Doe@John.com','a node'],['Mark', 'Pontus@Mark.com','nice to meet you']];
con.query(sqlInto, [values], function(err, result) {
  if (err) {
    throw err;
  };
  console.log("3 record inserted");
});

con.end();
