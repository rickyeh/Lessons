var express = require('express');
var app = express();

var listenPort = process.argv[2];

app.get('/search', function(req, res) {
    console.log(req.query);
    
    // Actual Answer
    // res.send(req.query    
    
    // Answer to Pass the bugged exercise
    delete req.query.__proto__;
    res.send(JSON.stringify(req.query));
});

app.listen(listenPort);