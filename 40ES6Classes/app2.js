'use strict';

// This is the same as abstracting everything into the class below. Note, this requires the latest Node. Older node versions require Babel to help transpile it!
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// Person.prototype.greet = function() {
//     console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
}


var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);