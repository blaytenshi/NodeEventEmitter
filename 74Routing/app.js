var express = require('express');
var app = express();

// environment variables, global variables specific to the environment (server) our code is living in.
// different servers have different variable settings, and we can access those values in code.
var port = process.env.PORT || 3000;
// either there's an environment variable called PORT (this is set when you deport to server) or it uses 3000.
// On the local machine it'll be 3000.

// HTTP Method (or verbs)
// specifies the type of actions the request wishes to make: GET, POST, DELETE and others.
app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>')
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
});

app.get('/api', function(req, res) {
    res.json({ firstName: 'John', lastName: 'Doe' })
});

app.listen(port);