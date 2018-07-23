var EventEmitter = require('events');
var util = require('util');

// constructor function
function Greetr() {
    this.greeting = 'Hello world!';
}

// any instance of Greetr will be able to call functions from EventEmitter (Greetr inherits EventEmitter properties and methods)
util.inherits(Greetr, EventEmitter);

// This may look strange because Greetr is a function!! WUT. Don't forget, this is possible because functions are first class
// This means they can be treated like objects and thus you can add to their prototype properties.
// Another reason for declaring the greet() function like this is because it saves memory.
// See: https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet'); // can call .emit() which is from EventEmitter
};

// Instantiate a Greetr object
var greeter1 = new Greetr();

// can now call .on() which is from EventEmitter. Here we're passing the event type and the function to execute, like we've seen before
greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

// when we call .greet() it will execute the console.log in the prototype function on Line 16 ('hello world!')as well as call the emit function which will trigger the .on() and log out 'someone greeted!'
greeter1.greet();