const express = require("express");

const router = express.Router();

const connection = require("../Database/MySQL.js");

router.get("/", (req, res) => {
  res.send("Welcome to Department Route!");
});

router.get("/:dept", (req, res) => {
  // Handle GET request logic here
  const department = req.params.dept.trim().toLocaleLowerCase();
  connection.query(`SELECT * FROM ${department}`, (error, results, fields) => {
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
  });
});

router.post("/new/fabrications", (req, res) => {
  const id = req.query.id;
  const item_desc = req.query.item_desc;
  const item_id = req.query.item_id;
  const quantity = req.query.quantity;
  const in_date = req.query.in_date;
  const out_date = req.query.out_date;

  connection.query(
    `INSERT INTO FABRICATIONS VALUES (${id}, '${item_desc}', '${item_id}', ${quantity}, '${in_date}', '${out_date}')`,
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

router.post("/new/assembly", (req, res) => {
  const id = req.query.id;
  const process = req.query.process;
  const process_id = req.query.process_id;
  const machine_id = req.query.machine_id;
  const in_date = req.query.in_date;
  const out_date = req.query.out_date;

  connection.query(
    `INSERT INTO ASSEMBLY VALUES (${id}, '${process}', '${process_id}', '${machine_id}', '${in_date}', '${out_date}')`,
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

router.post("/new/sub_assembly", (req, res) => {
  const id = req.query.id;
  const process = req.query.process;
  const assembly_id = req.query.assembly_id;
  const machine_id = req.query.machine_id;
  const item_id = req.query.item_id;
  const in_date = req.query.in_date;
  const out_date = req.query.out_date;

  connection.query(
    `INSERT INTO SUB_ASSEMBLY  VALUES (${id}, '${process}', '${assembly_id}', '${machine_id}', '${item_id}', '${in_date}', '${out_date}')`,
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
