var express = require('express');

var app = express.createServer(express.logger());
var file1 = require('fs');
var buf = new buffer(256);

app.get('/', function(request, response) {
  response.send(file1.readFile(index.html));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
