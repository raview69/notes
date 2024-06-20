const express = require("express");
const router = express.Router();
const NotesController = require("../controllers/notes.controller");
require("dotenv").config();

router.get("/", NotesController.getAll);

router.post("/", NotesController.create);

router.get("/:id", NotesController.getSingle);

router.put("/:id", NotesController.updateSingle);

router.delete("/:id", NotesController.deleteSingle);

module.exports = router;
