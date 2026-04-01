var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World from Jenkins CI/CD!\n");
});

server.listen(1337);
console.log("Server running at http://127.0.0.1:3000/");
