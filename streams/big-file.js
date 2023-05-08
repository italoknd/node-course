const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/lorem.txt", `random txt number: ${i}\n`, {
    flag: "a"
  });
}

//flag: a == append txt file
