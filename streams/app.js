const { createReadStream } = require("fs");

const stream = createReadStream("./content/lorem.txt");

stream.on("data", res => {
  console.log(res);
});
