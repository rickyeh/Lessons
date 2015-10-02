var path = require('path');
var express = require('express');
var app = express();

var listenPort = process.argv[2];
var filePath = process.argv[3];
console.log(path.join(__dirname,filePath));

app.set('views', filePath);
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()});
});
    
app.listen(listenPort);