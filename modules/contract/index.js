"use strict";

const express = require("express");
const db = require('./../../common/db')

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("getting contract");
  db.execute('select uuid()', () => {});
  res.send('hello');
  next();
});

router.get("/:id", (req, res, next) => {
  var id = req.params.id;

  console.log(`querying id with ${id}`);
  
  db.execute(`select * from contracts where id=${id}`, (results, fields, err) => {
    console.dir(results, fields, err);
  });

  res.send('hello');
  next();
});

router.post("/", (req, res, next) => {
  console.log("creating contract");
  db.execute('testing');
  res.send('hello');
  next();
});

module.exports = router;
