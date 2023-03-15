const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '0817',
  port: '3306',
  database: 'mydb1',
});

connection.connect();
//

module.exports = connection;
