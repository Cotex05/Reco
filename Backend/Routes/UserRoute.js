const express = require("express");

const router = express.Router();

const connection = require("../Database/MySQL.js");

router.get("/", (req, res) => {
  res.send("Welcome to User Route!");
});

router.post("/login", (req, res) => {
  // Handle POST request logic here
  // Execute a query using the connection pool
  connection.query(
    `SELECT * FROM users where email='${req.query.email}' and password='${req.query.password}'`,
    (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        return res.json({ success: false, login: false, error: error });
      } else if (results.length < 1) {
        return res.json({ success: true, login: false, data: results });
      }
      const response = {};
      response.success = true;
      response.login = true;
      response.data = results;
      return res.json(response);
    }
  );
});

module.exports = router;
