var express = require('express');

var app = express.createServer(express.logger());
var file1 = require('fs');
var buf = new buffer(256);

app.get('/', function(request, response) {
  file1.readFileSync("index.html", buf);
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
