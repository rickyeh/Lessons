var http = require('http');
var dispatcher = require('httpdispatcher');

const PORT = 8080;

function handleRequest(request, response) {
    try {
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.setStatic('resources');

dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    

dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log('Server listening on: http://localhost:%s', PORT);;
});