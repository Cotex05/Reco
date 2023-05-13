const mysql = require("mysql2");

// Create a connection pool
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "mysql",
//   database: "airbus",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "airbus2",
});
