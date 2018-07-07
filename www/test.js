const express = require('express');
const mysql = require('mysql');

const app = express();


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 5000,
    user: 'root',
    password: 'password'

});



connection.query('CREATE DATABASE IF NOT EXISTS test', function (err) {
    if (err) throw err;
    console.log("database created");
    connection.query('USE test', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS users('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'name VARCHAR(30)'
            + ')', function (err) {
            if (err) throw err;
        });
    });
});

// connection.end();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("send file index.html");

});


app.post('/users', function (req, res) {
    connection.query('INSERT INTO users SET ?', req.body,
        function (err, result) {
            if (err) throw err;
            res.send('User added to database with ID: ' + result.insertId);
        }
    );
});


const server = app.listen(5000, "127.0.0.1", function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log("app listening at http://%s:%s", host, port)

});