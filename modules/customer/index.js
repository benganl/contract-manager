"use strict";

const express = require("express");
const { v4: uuidv4, stringify } = require("uuid");

const db = require("./../../common/db");

const router = express.Router();

router.put("/", (req, res, next) => {
  console.log("creating customer");
  const customer = req.body;
  let id = uuidv4();
  let fullName = customer.fullName;

  db.execute(`insert into customers(id, full_names)values(uuid(), '${fullName}')`, (error, results, fields) => {
    console.dir(error, results, fields);
  });

  res.send("hello");
  next();
});

router.get("/:id", (req, res, next) => {
  
  const id = req.params.id;

  console.log('id :>> ', id);

  db.execute(`select * from customers where id = '${id}'`, (error, results, fields) => {
    console.dir(error, results, fields);
    try {
      console.dir(results);
      results.forEach((elem) => {
        console.log(elem.id.toString());
      });
    } catch (err) {
      console.error("Problem...", err);
    }
  });
});

router.get("/", (req, res, next) => {
  console.log("getting all customers");

  db.execute("select * from customers", (error, results, fields) => {
    try {
      console.dir(results);
      results.forEach((elem) => {
        console.log(elem.id.toString());
      });
    } catch (err) {
      console.error("Problem...", err);
    }
  });

  res.send("hello");
  next();
});

router.post("/", (req, res, next) => {
  console.log("creating customer");
  db.execute("testing");
  res.send("hello");
  next();
});

module.exports = router;
