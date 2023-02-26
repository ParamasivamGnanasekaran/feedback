const fs = require('fs')
const db = require('../database/db.js');
const router = require("express").Router();

router.get('/', (req, res) => {
  try {
    let sqlQuery = "SELECT * FROM users";
    db.query(sqlQuery, (err, results) => {
      if (err) throw err;
      res.json(apiResponse(results));
    });
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
})

router.get('/:id', (req, res) => {
  let sqlQuery = "SELECT * FROM users WHERE id=" + req.params.id;

  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    let response = apiResponse(results)
    res.json({ response });
  });
});

router.post('/', (req, res) => {
  let data = { FirstName: req.body.FirstName, LastName: req.body.LastName, Email: req.body.Email };
  let sqlQuery = "INSERT INTO users SET ?";
  db.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    res.json(apiResponse(results));
  });
});

router.put('/:ID', (req, res) => {
  let sqlQuery = "UPDATE users SET role='" + req.body.role + "', manager_name='" + req.body.manager_name + "', team_name='" + req.body.team_name + "' WHERE ID=" + req.params.ID;

  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(apiResponse(results));
  });
});

router.delete('/:id', (req, res) => {
  let sqlQuery = "DELETE FROM users WHERE id=" + req.params.id + "";

  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(apiResponse(results));
  });
});

function apiResponse(results) {
  return { "status": 200, "error": null, "response": results };
}

module.exports = router;