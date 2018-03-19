var express = require("express");

var port = 8082;
var app = express();

app.use(express.static("public"));

app.listen(port);

console.log("");
console.log("Now listening on port " + port);
console.log("Ctrl-c to stop");
console.log("");