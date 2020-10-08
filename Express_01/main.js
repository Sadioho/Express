var express = require("express");
var app = express();
var port = 8080;
app.get("/", function (request, response) {
  response.send("<h1>Toi dang hoc expess</h1>");
});
app.get("/user", function (request, response) {
  response.send("<h1>User List</h1>");
});

app.listen(port, function () {
  console.log("server listening on port " + port);
});
