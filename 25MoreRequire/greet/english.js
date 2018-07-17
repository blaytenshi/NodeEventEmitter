// Node will automatically convert the JSON object into a regular javascript object when you require a JSON file
var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.en) // ...the imported JSON file turned into an object with accessible properties! WOW!
};

// exporting a variable which is a function, nothing we haven't seen already
module.exports = greet;