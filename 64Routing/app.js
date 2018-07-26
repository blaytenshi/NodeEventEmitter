var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstName: 'John',
            lastName: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404) // send back a 404 status message and return nothing!
    }

}).listen(1337, '127.0.0.1');