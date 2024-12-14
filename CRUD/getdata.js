const express = require("express");
const data = require("../data.json");

const get = express.Router();

get.get("/users", (req, res) => {
  res.send(data);
});

get.get("/", (req, res) => {
  res.send("<h1> Welcome to the API<h1>");
});

get.get("/users/:id", (req, res) => {
  userid = req.params.id;
  res.send(data.filter((user) => user.id == userid));
});

module.exports = get;
