const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user.controller");

router.get("/", UsersController.getAll);

router.post("/", UsersController.create);

router.post("/sendemail", UsersController.sendMail);

router.get("/:id", UsersController.getSingle);

router.put("/:id", UsersController.updateSingle);

router.delete("/:id", UsersController.deleteSingle);

module.exports = router;
