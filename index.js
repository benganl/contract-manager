"use strict";

const express = require("express");
const contractRouter = require("./modules/contract");
const customerRouter = require("./modules/customer");

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contract", contractRouter);
app.use("/customer", customerRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
