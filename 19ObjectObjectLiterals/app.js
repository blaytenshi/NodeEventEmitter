// An object in Javascript is just bunch of name-value pairs (or key-value pairs)
// An object literal is just a name-value pair separated by commas and surrounded by curly braces, it is an object defined 'literally'

// Here is an object-literal, remember, an object defined literally with each the properties of the object explicitly defined
var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
};

// DOT NOTATION
// this is accessing the person object's greet property (which is a function) using the dot notation
person.greet(); // this will print 'Hello, John Doe'
console.log(" " + person.greet); // will print out the function (the " " in front turns it all into a string), without it it will just print '[Function: greet]'
// accessing the firstName property, again, using the 'dot' notation
console.log(person.firstName);
// accessing the lastName property, again, 'dot' notation
console.log(person.lastName);

// BRACKET NOTATION
// this is accessing the person object's property through bracket notation. Note the need to supply the name of the property in the brackets in a string
console.log(person['firstName']);
person['greet'](); //yes this is valid, you can execute the function on the property like this

// WHY USE BRACKET NOTATION?
// It can be useful when I want to dynamically, decide, with a string, which property I wish to access