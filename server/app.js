const express = require("express");
const router = require("./routers");
const basicErrorHendler = require("./middlewares/errors/basic");

const app = express();

app.use(express.json());
app.use(router);
app.use(basicErrorHendler);

module.exports = app;
