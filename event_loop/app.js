const { readFile, writeFileSync } = require("fs");

writeFileSync("file.txt", "This is the text of my text file!");

console.log("started a first task");

readFile("./file.txt", "utf8", (err, res) => {
  if (err) return console.log(err);

  console.log(res)
  console.log('completed first task!');
});

console.log('starting a new task.');
