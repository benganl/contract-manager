"use strict";

const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "sql9.jnb2.host-h.net",
  user: "wyzetmzfap_1",
  password: "z8qeQvA0sS7SyE50h19v",
  database: "wyzetmzfap_db1",
});

const execute = (stmt, callback) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully connected to database.");
    }

    conn.query(stmt, (err, results, fields) => {
      if (err) {
        return console.log(err);
      }
      callback(err, results, fields);
    });

    conn.release();
  });
};

module.exports = { pool, execute };
