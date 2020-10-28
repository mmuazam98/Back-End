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

//fetches
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
//posts
app.post("/addUser", (req, res) => {
  res.send("The data is added");
});

//updates
app.put("/updateData", (req, res) => {
  res.send("The data is updated");
});
//deletes
app.delete("/deleteData", (req, res) => {
  res.send("The data is deleted");
});
const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server is  at ${PORT}`);
});
