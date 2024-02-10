// routes/index.js
const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Display all notes
router.get("/", (req, res) => {
  const notes = Note.getAll();
  res.render("index", { notes });
});

// Add more routes here

module.exports = router;
