var fs = require('fs');
var testFilePath = process.argv[2];

var content;

function callback(err, data) {
    if (err) {
        throw err;
    }
    
    var str = data.toString();
    str = str.split('\n');
    console.log(str.length - 1);
}

fs.readFile(testFilePath, callback);