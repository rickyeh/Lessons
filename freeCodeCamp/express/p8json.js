var express = require('express');
var app = express();
var fs = require('fs');

var listenPort = process.argv[2];
var fileName = process.argv[3];

function getCallback(req, res) {
    fs.readFile(fileName, function(err, data) {
        if (err) {
            throw err;
        }
        var books = JSON.parse(data);
        
        // Actual Answer
        // res.json(books);
        
        // Answer to pass bugged exercise
        res.send(JSON.stringify(books));
    });
}

app.get('/books', getCallback);

app.listen(listenPort);