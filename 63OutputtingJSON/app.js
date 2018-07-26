var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstName: 'John',
        lastName: 'Doe'
    };
    res.end(JSON.stringify(obj)); // this is serialising the data, translating an object into a format that can be stored or transferred
    // deserialisation is the opposite, converting the format back into an object

}).listen(1337, '127.0.0.1');