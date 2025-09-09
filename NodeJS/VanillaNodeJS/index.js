const http = require("http");
const url = require("url");

//let exampleUrl = 'www.google.com/products/users?search=44';
let items = [];
const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const { pathName, query } = parsedUrl;

  if (request.method === "POST" && pathName === "/items") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      const data = JSON.parse(body);
      if (!data.name) throw new Error("Name Doesn't Exist");
      const item = { id: 1, name: data.name };
      items.push(item);
      response.writeHead(201);
      response.end(item);
    });
  }
});

server.listen(3000, () => {
  console.log("Server Is Listening on port 3000");
});
