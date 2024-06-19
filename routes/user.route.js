const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user.controller");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  const secret = process.env.SECRET;

  if (!token) {
    return res
      .status(403)
      .json({ message: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  return next();
};

router.get("/", UsersController.getAll);

router.get("/findoldest", UsersController.findOldest);

router.post("/", UsersController.create);

router.post("/sendemail", verifyToken, UsersController.sendMail);

router.get("/:id", UsersController.getSingle);

router.put("/:id", UsersController.updateSingle);

router.delete("/:id", UsersController.deleteSingle);

module.exports = router;
