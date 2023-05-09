const http = require("http");
const fs = require("fs");

const host = "localhost";
const PORT = 5001;

http
  .createServer((req, res) => {
    //DUMB SOLUTION
    // const txt = fs.readFileSync("../streams/content/lorem.txt", "utf8");
    // res.end(txt);

    //SMART SOLUTION
    const fileStream = fs.createReadStream(
      "../streams/content/lorem.txt",
      "utf8"
    );

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", e => {
      res.end(e);
    });
  })
  .listen(PORT, host, () => {
    console.log(`Servidor rodando em: http://${host}:${PORT}`);
  });
