const express = require("express");
const process = require("process");
const Post = require("./router");
const logger = require("./logger");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use("/", Post);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
