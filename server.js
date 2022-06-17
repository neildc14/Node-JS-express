const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request received");
  res.writeHead(200, { "Content-Type": "text/html" });

  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.write(data); //
    res.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening to port 3000");
});
