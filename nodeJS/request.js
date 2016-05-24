var request = require('request');
var fs = require('fs');


request
  .get('http://www.google.com')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('index.html'))