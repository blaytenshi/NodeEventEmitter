var greet3 = require('./greet3'); // here we've imported the greet3.js file into the greet3 variable (the content of the export in greet3.js is a function)
var stringValue = require('./string');
var stringValue2 = require('./string2');

greet3(); // because we know the 'thing' being exported from 'greet3.js' is function, we can call/invoke it
// stringValue(); // this will crash because the object being exported from 'string.js' is not a function
console.log("Value of stringValue is: ", stringValue); // will print out the string!
console.log("Value of stringValue2 is: ", stringValue2); // will still print out the function itself
console.log("Value of stringValue2() is: ", stringValue2()); // will call the function and return the string