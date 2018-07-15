const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});

connection.connect();

module.exports = connection;