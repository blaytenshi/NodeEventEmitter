'use strict';

var EventEmitter = require('events');

// This whole thing has been converted to ES6 now! :D
// Much cleaner and less confusing though a little less clear for people who aren't coming from Javascript
// var util = require('util');
//
// function Greetr() {
//     EventEmitter.call(this); // so that Greetr will also inherit the properties from EventEmitter
//     this.greeting = 'Hello world!';
// }
//
// util.inherits(Greetr, EventEmitter);
//
// Greetr.prototype.greet = function(data) {
//     console.log(this.greeting + ": " + data);
//     this.emit('greet', data);
// };

// Can export the whole class! Or if you're using ES6 syntax, use 'export default class (...)'
module.exports = class Greetr extends EventEmitter { // this is also called a 'class expression'
    constructor() {
        super(); // super acts like the .call() method, just make sure you use extends keyword like in line 20
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
};