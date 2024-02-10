// app.js
const express = require("express");
//const methodOverride = require("method-override");
const app = express();
const port = 3000;

//app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

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
