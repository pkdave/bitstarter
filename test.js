#!/usr/bin/env node


var file1 = require('fs');
var buf = new Buffer(256);

file1.readFile("index.html", function (err, data) 
   {  if (err) throw err; 
      console.log(data); 
      buf = data; console.log("Buffer is: ", buf); 
      console.log("Buffer Data is: ", buf.toString())
    }
);

file1.readFileSync("index.html", buf);
console.log("Buffer is: ", buf);
console.log("Buffer data is:", buf.toString());
