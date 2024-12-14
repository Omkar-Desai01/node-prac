const express = require("express");
const data = require("../data.json");

const create = express.Router();

create.post("/users", (req, res) => {
  data.push({
    id: data.length + 1,
    name: req.body.name,
  });
  res.send(data[data.length - 1]);
});

module.exports = create;
