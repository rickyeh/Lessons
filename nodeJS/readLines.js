
fs = require('fs');
fs.readFile('us-500.csv', 'utf8', function(err, data) {

    readLines(data);
});

// function entry(first, last, company, address, city, county, state, zip, phone1, phone2, email, web) {
//     this.first_name = first;
//     this.last_name = last;
//     this.company_name = company;
//     this.address = address;
//     this.city = city;
//     this.county = county;
//     this.state = state;
//     this.zip = zip;
//     this.phone1 = phone1;
//     this.phone2 = phone2;
//     this.email = email;
//     this.web = web;
// }


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
// Create An object

// Start Loop
// When you see ", store that string into property until "
// Discard or skip comma
// Read in next string
// Do this once for every field (12 fields)
// Print out object