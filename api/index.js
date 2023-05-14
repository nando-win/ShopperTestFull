require("dotenv").config({ path: "var.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./src/routes");
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em localhost:${process.env.PORT}`);
});
