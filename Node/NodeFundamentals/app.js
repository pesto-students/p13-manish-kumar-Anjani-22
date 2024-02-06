const fs = require("fs");
const readLine = require("readline");
const greetings = require("./greetings");

const r1 = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(`What's your name?`, (input) => {
  const data = greetings(input);
  fs.writeFile("output.txt", data, "utf8", (err) => {
    if (err) console.log(err);
    else {
      console.log("text copied in output.txt");
      r1.close;
    }
  });
  r1.close();
});
