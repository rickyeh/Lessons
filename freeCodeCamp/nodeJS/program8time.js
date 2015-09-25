// Write a TCP time server!

// Your server should listen to TCP connections on the port provided
// by the first argument to your program. For each connection you must
// write the current date & 24 hour time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be
// zero-filled to 2 integers. For example:

//     "2013-07-06 17:42"

var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket) {
    var responseString;
    var date = new Date();

    var year = date.getFullYear();
    var month = ('0' + (date.getMonth()+1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var hours = date.getHours();
    var mins = date.getMinutes();

    responseString = year + '-' + month + '-' + day + ' ' + hours + ':' + mins;
    
    socket.write(responseString);
    
    socket.end('\n');
});

server.listen(port);

