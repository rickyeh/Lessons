var express = require('express');
var app = express();
var listenPort = process.argv[2];

app.get('/home', function(req, res) {
  res.end('Hello World!');
});
app.listen(listenPort);