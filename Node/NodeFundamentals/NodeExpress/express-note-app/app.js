// app.js
const express = require("express");
const app = express();
const port = 3000; // Change this to your desired port

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files (CSS, JS, etc.)
app.use(express.static("public"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define your routes

const indexRoute = require("./routes/index");
const notesRoute = require("./routes/notes");

app.use("/", indexRoute);
app.use("/notes", notesRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
