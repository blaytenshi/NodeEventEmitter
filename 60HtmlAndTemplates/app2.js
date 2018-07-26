var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/indexTemplate.htm', 'utf8'); // converting it to a string instead of the usual buffer
    var message = 'Hello world...';
    html = html.replace('{Message}', message); // will replace the pattern in the first parameter with what's in the second parameter
    res.end(html);

}).listen(1337, '127.0.0.1');