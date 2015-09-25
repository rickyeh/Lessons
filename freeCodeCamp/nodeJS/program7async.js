// This problem is the same as the previous problem (HTTP COLLECT) in that you need
// to use http.get(). However, this time you will be provided with three URLs as 
// the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and 
// print it to the console (stdout). You don't need to print out the length, just the 
// data as a String; one line per URL. The catch is that you must print them out in the 
// same order as the URLs are provided to you as command-line arguments.

var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var responseCount = 0;
var responseObj = {};

http.get(url1, getCallbackWithURL(url1));
http.get(url2, getCallbackWithURL(url2));
http.get(url3, getCallbackWithURL(url3));

function getCallbackWithURL(url) {
    function callback(response) {
        var responseData = [];
        
        response.setEncoding('utf8');
        response.on('data', function(data) {
            responseData.push(data);
        });
        response.on('end', function(responseId) {
            responseCount++
            
            responseObj[url] = responseData.join('');
            
            if (responseCount === 3) {
                console.log(responseObj[url1]);
                console.log(responseObj[url2]);
                console.log(responseObj[url3]);
            }
        });
    };

    return callback;
}
