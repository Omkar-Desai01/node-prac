const express = require("express");
const fs = require("fs");
const dataFile = "../data.json";

const del = express.Router();
let data = require(dataFile);
del.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);

  data = data.filter((user) => user.id !== userId);

  fs.writeFileSync("../data.json", JSON.stringify(data, null, 2));

  res.send(data);
});

module.exports = del;
