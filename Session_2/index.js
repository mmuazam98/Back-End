// npm i express body-parser mysql
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mysql = require("mysql");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newDatabase",
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
//posts
app.post("/addUser", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var regNumber = req.body.regNumber;
  // INSERT INTO table_name (cloumn1, column2, ...) VALUES (value1, value2,....)
  var query =
    'INSERT INTO USERINFO (firstName, lastName, regNumber) VALUES ("' +
    firstName +
    '","' +
    lastName +
    '","' +
    regNumber +
    '")';
  con.query(query, (err, results) => {
    if (err) {
      res.send(er.message);
      console.log(err);
      console.log(err.message);
    } else {
      console.log("Data has been entered.");
      res.send({
        status: 200,
        message: "Data is entered.",
      });
    }
  });
});

const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server is  at ${PORT}`);
});
