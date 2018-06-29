var http = require('http');
var url = require('url');

function start (route, handle) {

    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.')
        route (handle, pathname, response);
    }).listen(8080);

    console.log('Server running at http://localhost:8080/');
    console.log('Press "CTRL+C" to quit');
}

exports.start = start;