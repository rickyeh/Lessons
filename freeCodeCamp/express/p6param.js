var express = require('express');
var app = express();
var crypto = require('crypto');

var listenPort = process.argv[2];

app.put('/message/:id', function(req, res) {
    console.log(req.url);
    console.log(req.params.id);
    
    var id = req.params.id;
    
    var sha = crypto.createHash('sha1')
                    .update(new Date().toDateString() + id)
                    .digest('hex');
    
    res.write(sha);
    res.end();
    // Or can use res.send();
});
    
app.listen(listenPort);