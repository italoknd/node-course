const { readFile, writeFile } = require("fs");
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//BEFORE (WITH NO PROMISIFY)
// const getText = path => {
//   return new Promise((res, rej) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) rej(err);
//       else res(data);
//     });
//   });
// };

//AFTER (USING PROMISIFY)

const start = async () => {
  try {
    const first = await getText(__dirname + "/index.html");
    const about = await getText(__dirname + "/about.html");

    console.log(first);
    console.log(about);
  } catch (err) {
    console.log(err);
  }
};

console.log(start());
