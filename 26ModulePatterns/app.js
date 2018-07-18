// METHOD 1:
// Most normal way of using a required file
var greet = require('./greet1');
greet();

// METHOD 2:
// Because .greet is a property of module.exports, we can require it straight into greet2 variable
var greet2a = require('./greet2').greet;
greet2a();

var greet2b = require('./greet2');
greet2b.greet(); // we can do this also!

// METHOD 3:
// using a function constructor to return a new object assigned to module.exports
var greet3 = require('./greet3');
console.log(greet3.greeting); // can do this to access the object property, seems like this isn't good practice though
greet3.greet(); // is a better way to do it as it will call the greet function inside the new object

// **WARNING
// The below will actually change the new object that was returned by the require function in line 16!
greet3.greeting = 'Changed hello world!';
var greet3b = require('./greet3');
greet3b.greet();
// Why did it change? Because this require function actually caches the module object. If the require is for the same
// file, thus same code, node will simply give back the same module object already created by require function


// METHOD 4:
// So what if we didn't want the caching to happen? Well, we'll get the module.exports to export the constructor
// function instead of the new object that was constructed
var Greet4 = require('./greet4'); // Capitalised Greet4 so we know it's a constructor function (aka class)
var greetr = new Greet4(); // now we instantiate the object here with the new keyword (returns the new object with all properties)
greetr.greet();

// METHOD 5:
// Revealing module pattern
var greet5a = require('./greet5');
greet5a.greet();

var greet5b = require('./greet5').greet;
greet5b();