var mymodule = require('./program4module.js');

var filePath = process.argv[2];
var filterExtension = process.argv[3];

mymodule(filePath, filterExtension, function(err, list) {
    if (err) {
        return console.error('Error: ', err);
    }
    
    for (var i=0; i<list.length; i++) {
        console.log(list[i]);
    }
});