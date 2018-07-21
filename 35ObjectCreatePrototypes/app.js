var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

// There are many ways to create a prototype chaine. This method uses Object.create() method:
// Here you pass into the create method the object in which you want the new returned object to inherit from
var john = Object.create(person); // after Object.create() is executed, john will basically be the 'person' object.
john.firstName = 'John'; // here we overwrite the inherited properties with custom properties (before it was '')
john.lastName = 'Doe';

var jane = Object.create(person); // we do the same with jane. It's important to note both john and jane objects are in different memory spaces thus setting the properties will not overrite each other!
jane.firstName = 'Jane';
jane.lastName = 'Doe';

console.log(john.greet()); // now because we didn't overwrite the greet() methods, when we call greet (which the john and jane objects both have), JavaScript will look down the prototype chain until it finds the greet() and call invoke it.
console.log(jane.greet());