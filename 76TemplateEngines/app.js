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

// links the view engine and will look for the specific template extension in the root /views folder
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
    res.json({ firstName: 'John', lastName: 'Doe' })
});

app.listen(port);