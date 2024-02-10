// routes/notes.js
const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Create a new note
router.post("/create", (req, res) => {
  const { title, content } = req.body;
  const newNote = Note.create(title, content);
  res.redirect("/");
});

// Edit an existing note
router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedNote = Note.update(Number(id), title, content);
  if (updatedNote) {
    res.redirect("/");
  } else {
    res.status(404).send("Note not found");
  }
});

// Delete a note
router.post("/delete/:id", (req, res) => {
  const { id } = req.params;
  const deletedNote = Note.delete(Number(id));
  if (deletedNote) {
    res.redirect("/");
  } else {
    res.status(404).send("Note not found");
  }
});

module.exports = router;
