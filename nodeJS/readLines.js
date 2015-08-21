
fs = require('fs');
fs.readFile('test.csv', 'utf8', function(err, data) {

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

    console.log(string);
    console.log();

    string = string.split('\n');
    string.shift();

    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].substr(1);
        string[i] = string[i].substr(0, string[i].length - 1);
        string[i] = string[i].split('\",\"');
    }

    for (var i = 0; i < string.length; i++) {
        console.log(string[i][0] + ' | ' + string[i][1] + ' | ' + string[i][2] + ' | ' + string[i][3] +
                    string[i][4] + ' | ' + string[i][5] + ' | ' + string[i][6] + ' | ' + string[i][7] +
                    string[i][8] + ' | ' + string[i][9] + ' | ' + string[i][10] + ' | ' + string[i][11]);
    }

// 45646 5454 6545 34534 345345345
}
console.log();
// Create An object

// Start Loop
// When you see ", store that string into property until "
// Discard or skip comma
// Read in next string
// Do this once for every field (12 fields)
// Print out object