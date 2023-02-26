const fs = require('fs')
const db = require('../database/db.js');
const router = require("express").Router();

router.get('/', (req, res) => {       
try { 
    let sqlQuery = "SELECT * FROM people";
    db.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.status(200).json({data:results});
  });
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
 })


module.exports = router;