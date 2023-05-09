const { createReadStream } = require("fs");

const stream = createReadStream("./content/lorem.txt", {
  highWaterMark: 5050,//quantos bytes vão ser processsados por vez
  encoding: "utf8"//de que formato os dados vao ser mostrados
});

stream.on("data", res => {
  console.log(res);
});

stream.on("error", err => {
  console.log("An error occured: ", err);
}); 
