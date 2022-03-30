const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

//connecting to the database and checking for errors if any are present
const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "ecommerce_v2",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else if (!err) {
    console.log("We did it!");
  }
});

app.use(cors());
app.use(express.json());

app.get("/AllProducts", (req, res) => {
  db.query(`SELECT * FROM products`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(4000, () => {
  console.log(`console server listening on port 4000`);
});
