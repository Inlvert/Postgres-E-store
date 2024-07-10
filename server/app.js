const express = require("express");
const router = require("./routers");
const basicErrorHendler = require("./middlewares/errors/basic");
const tokenErrorHendler = require("./middlewares/errors/token");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(tokenErrorHendler);
app.use(basicErrorHendler);

app.use(express.static('public'))

module.exports = app;
