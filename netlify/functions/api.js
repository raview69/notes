const express = require("express");
const router = express.Router();

const serverless = require("serverless-http");

router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

module.exports.handler = serverless(api);
