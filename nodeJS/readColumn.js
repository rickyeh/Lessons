
fs = require('fs');
fs.readFile('us-500.csv', 'utf8', function(err, data) {

    readLines(data);
    printColumn(col)
});

var paramInput = process.argv[2];
var col;
var lines = [];
var string;

function readLines(string) {

    // Create Array
    string = string.replace(/,(\d{5}),/g, ',\"$1\",'); // Format string to fix Zip codes without quotes

    lines = string.split(/[\r\n]/); // Split on line endings, whether it's \r or \n
    
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].substr(1); // Removes the first quote of each array item
        lines[i] = lines[i].substr(0, lines[i].length - 1); // Removes the last quote of each array item
        lines[i] = lines[i].split('","'); // Splits the line into arrays delimitd by ","
    }

    if (paramInput !== undefined) {
        col = lines[0].indexOf(paramInput);
    }
}

function printColumn(col) {
    for (var i = 0; i< lines.length; i++) {
        console.log(lines[i][col]);
    }
}
console.log();
