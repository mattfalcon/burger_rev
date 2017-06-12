// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'b9b698b1b21265',
  password: '3e4dc9a9',
  database: 'heroku_924191446087470'
});

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "oldmanlogan11#",
//   database: "burgers_db"
// });
// };

// Make connection.
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
