// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var listenPort = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    var stringToReverse = req.body.str;

    var reversedString = stringToReverse.split('').reverse().join('');
    res.send(reversedString);
});
    
app.listen(listenPort);