// models/Note.js
let notes = [];

class Note {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static getAll() {
    return notes;
  }

  static getById(id) {
    return notes.find((note) => note.id === id);
  }

  static create(title, content) {
    const id = notes.length + 1;
    const newNote = new Note(id, title, content);
    notes.push(newNote);
    return newNote;
  }

  static update(id, title, content) {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes[index].title = title;
      notes[index].content = content;
      return notes[index];
    }
    return null;
  }

  static delete(id) {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      const deletedNote = notes.splice(index, 1);
      return deletedNote[0];
    }
    return null;
  }
}

module.exports = Note;
