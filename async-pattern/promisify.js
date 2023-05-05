const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

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
const getText = async () => {
  try {
    const first = await readFilePromise(__dirname + "/index.html", "utf8");
    const about = await readFilePromise(__dirname + "/about.html", "utf8");
    await writeFilePromise(
      "./writing-file/result-mind-grenade.txt",
      `ALL TOGETHER: ${first} ${about}`
    );

    // console.log(first);
    // console.log(about);
  } catch (err) {
    console.log(err);
  }
};
 
// const start = async () => {
//   try {
//     const first = await getText(__dirname + "/index.html");
//     const about = await getText(__dirname + "/about.html");

//     console.log(first);
//     console.log(about);
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(start());
console.log(getText());
