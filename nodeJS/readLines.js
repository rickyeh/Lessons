
fs = require('fs');
fs.readFile('us-500.csv', 'utf8', function(err, data) {

    readLines(data);
});



function readLines(string) {

    // Create Array and toss first line
    string = string.replace(/,(\d{5}),/g, ',\"$1\",');

    var lines = string.split(/[\r\n]/); // Split on line endings, whether it's \r or \n
    
    lines.shift(); // Remove first line
    
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].substr(1); // Removes the first quote of each array item
        lines[i] = lines[i].substr(0, lines[i].length - 1); // Removes the last quote of each array item
        lines[i] = lines[i].split('","');
        var output = lines[i].join(' | ');
        console.log(output);
    }
}
console.log();
