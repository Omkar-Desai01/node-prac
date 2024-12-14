const express = require("express");
const data = require("../data.json");

const pat = express.Router();

pat.patch("/users/:id", (req, res) => {
  data[req.params.id].name = req.body.name;
  res.send(data[req.params.id]);
});

module.exports = pat;
