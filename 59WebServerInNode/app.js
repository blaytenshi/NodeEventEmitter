var http = require('http');

http.createServer(function(req, res) {

    // the reason we wrap the ContentType in quotes is because sometimes there are invalid characters in keys. Wrapping them in quotes will allow us to get away with them.
    // the plain text is just for testing
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // the \n is a good way to end the data
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1'); // will listen on port number 1337 and on localhost/127.0.0.1

// when we hit node app.js it will sit there waiting for requests! :)