#!/usr/bin/env node

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");

require("./utils/config");

const userRouter = require("./routes/user.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", function (req, res, next) {
  res.json({
    message: "Hello World!",
  });
});

app.use("/api/user", userRouter);

const port = 3000;
app.set("port", port);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
