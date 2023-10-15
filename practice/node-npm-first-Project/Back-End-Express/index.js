const express = require("express");
const app = express();
const port = 3000;
const db = require("./DB-Folder/db_connection");
app.get("/", function (req, res) {
  res.send("Home Route");
});

app.post("/addQuote", (req, res) => {
  const quote = req.body.quote;

  db.query(
    "INSERT INTO posts (quote) VALUES (quote)",
    [quote],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

app.get("/hello", function (req, res) {
  res.send("Hello Route");
});

//DB Connection
app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`);
});
