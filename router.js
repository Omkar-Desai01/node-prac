const data = require("./data.json");
const express = require("express");
const get = require("./CRUD/getdata");
const patch = require("./CRUD/update");
const del = require("./CRUD/delete");

const post = require("./CRUD/create");

const route = express.Router();

route.post("/", (req, res) => {
  res.send("Post sucess ");
});

route.use("", del);

route.use("", get);
route.use("", post);
route.use("", patch);

module.exports = route;
