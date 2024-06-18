const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user.controller");
var jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

router.get("/", UsersController.getAll);

router.get("/findoldest", UsersController.findOldest);

router.post("/", UsersController.create);

router.post("/sendemail", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

router.get("/:id", UsersController.getSingle);

router.put("/:id", UsersController.updateSingle);

router.delete("/:id", UsersController.deleteSingle);

module.exports = router;
