const express = require("express");
const router = require("./routers");
const basicErrorHendler = require("./middlewares/errors/basic");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(basicErrorHendler);

module.exports = app;
