var util = require('util');

// Constructor function, with its own properties. usual stuff
function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

// Adding to constructor functions prototype, again usual stuff
Person.prototype.greet = function() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

// Constructor function for policeman that has his own properties
function Policeman() {
    Person.call(this); // uncomment this after reading the paragraph before officer.greet()
    this.badgeNumber = '1234';
}

Policeman.prototype.showBadge = function() {
    console.log(this.badgeNumber);
};

// use util.inherits so Policeman gets the prototypes of Person
util.inherits(Policeman, Person);

// instantiate a new Policeman
var officer = new Policeman();

// call greet()
// Here it will only print 'Hello undefined undefined'. Why?
// Because inherits only allows the methods of the super object to be linked through. It doesn't add the properties to the new object!
// To do this, we will need to use Javascripts .call() in line 16
// Now, when we instantiate a new Policeman object, we will invoke the Person.call() line with the 'this' keyword
// At this stage, the 'this' keyword is linked to Person's firstName and lastName properties and copied to the new Policeman object with the call() method
// IMPORTANT: We need to use Person.call(this) BEFORE the this.badgeNumber because the call(this) effectively replaces everything in the new policeman object
// having the this.badgeNumber after the .call(this) means we append to what is returned
officer.greet();
officer.showBadge();