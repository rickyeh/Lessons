var express = require('express');
var app = express();
var fs = require('fs');

var listenPort = process.argv[2];
var fileName = process.argv[3];

app.get('/', function(req, res) {
    console.log('hi');
    res.end();
});

app.listen(listenPort);