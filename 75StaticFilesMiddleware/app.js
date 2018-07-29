var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// this middleware is used to handle requests for any physical files you may have to serve up. Anything requests to /assets and express will go to the /public folder and get the matching file and extension
app.use('/assets', express.static(__dirname + '/public'));

// custom middleware. intercepts any request to the '/' route and log out the message:
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next(); // run the next middleware
});

app.get('/', function(req, res) {
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello world!</h1></body></html>')
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
});

app.get('/api', function(req, res) {
    res.json({ firstName: 'John', lastName: 'Doe' })
});

app.listen(port);