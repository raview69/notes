const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user.controller");

router.get("/", UsersController.getAll);

router.post("/", UsersController.create);

router.get("/:id", UsersController.getSingle);

router.put("/:id", UsersController.updateSingle);

router.delete("/:id", UsersController.deleteSingle);

module.exports = router;
