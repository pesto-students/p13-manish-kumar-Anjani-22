const express = require("express");
const app = express();
const port = 3000;
const db = require("./DB-Folder/db_connection");
app.get("/", function (req, res) {
  res.send("Home Route");
});

app.get("/hello", function (req, res) {
  res.send("Hello Route");
});

//DB Connection
app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`);
});
