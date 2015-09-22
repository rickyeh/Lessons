var fs = require('fs');
var mymodule = require('./program4module.js');

var filePath = process.argv[2];
var filterExtension = process.argv[3];

fs.readdir(filePath, mymodule.listDirectory);