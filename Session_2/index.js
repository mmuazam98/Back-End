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

app.post("/addUser", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let regNumber = req.body.regNumber;
  // INSERT INTO table_name (cloumn1, column2, ...) VALUES (value1, value2,....)
  let query =
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

app.post("/deleteUser", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let regNumber = req.body.regNumber;
  let query = `DELETE FROM USERINFO WHERE firstName = "${firstName}" AND lastName = "${lastName}" AND regNumber = ${regNumber} `;
  con.query(query, (err, results) => {
    if (err) {
      res.send(err.message);
      // console.log(err);
      console.log(err.message);
    } else {
      console.log("Data has been deleted.");
      res.send({
        status: 200,
        message: "Data is deleted.",
      });
    }
  });
});

app.post("/updateUser", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let regNumber = req.body.regNumber;
  let newFirstName = req.body.newFirstName;
  let newLastName = req.body.newLastName;
  let newRegNumber = req.body.newRegNumber;
  let query = `UPDATE USERINFO SET firstName = "${newFirstName}" , lastName = "${newLastName}" , regNumber = ${newRegNumber} WHERE firstName = "${firstName}" AND lastName = "${lastName}" AND regNumber = ${regNumber} `;
  con.query(query, (err, results) => {
    if (err) {
      res.send(err.message);
      // console.log(err);
      console.log(err.message);
    } else {
      console.log("Data has been updated.");
      res.send({
        status: 200,
        message: "Data is updated.",
      });
    }
  });
});

const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server is  at ${PORT}`);
});
