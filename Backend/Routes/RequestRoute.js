const express = require("express");

const router = express.Router();

const connection = require("../Database/MySQL.js");

router.get("/", (req, res) => {
  res.send("Welcome to Request Route!");
});

router.get("/:status", (req, res) => {
  // Handle GET request logic here
  const status = req.params.status.trim().toLocaleLowerCase();
  connection.query(
    `SELECT * FROM requests where status='${status}'`,
    (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        return res.json({ success: false, error: error });
      } else if (results.length < 1) {
        return res.json({ success: true, data: results });
      }
      const response = {};
      response.success = true;
      response.data = results;
      return res.json(response);
    }
  );
});

router.post("/new", (req, res) => {
  const id = 3;
  const description = req.query.description;
  const request_type = req.query.request_type;
  const action_type = req.query.action_type;
  const requested_by = req.query.requested_by;
  const status = req.query.status;

  connection.query(
    `INSERT INTO REQUESTS VALUES (${id}, '${description}', '${request_type}', '${action_type}', ${requested_by}, '${status}')`,
    (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        return res.json({ success: false, error: error });
      } else if (results.length < 1) {
        return res.json({ success: true, data: results });
      }
      const response = {};
      response.success = true;
      response.data = results;
      return res.json(response);
    }
  );
});

module.exports = router;
