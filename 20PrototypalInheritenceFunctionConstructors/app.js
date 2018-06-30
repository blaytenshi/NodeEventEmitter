// Javascript has prototypal inheritence. See below for badly drawn graphic
/*
 *                  ^                     +-------------+                 +-------------+
 *                 /                      |   object1   |                 |   object2   |
 *                / N                     +-------------+                 +-------------+
 *               / I                         /      \                           |
 *              / A                         /        \                          |
 *             / H                         /          \                         |
 *            / C                +------------+     +------------+              |
 *           / -                 |  proto {}  |     |    prop1   |              |
 *          / O                  +------------+     +------------+              |
 *         / T                      /       \ \                                 |
 *        / O                      /         \ +--------------------------------+
 *       / R                      /           \
 *      / P              +------------+     +------------+
 *     /                 |  proto {}  |     |    prop2   |
 *    V                  +------------+     +------------+
 *                                  \
 *                                   \
 *                                    \
 *                                  +------------+
 *                                  |    prop3   |
 *                                  +------------+
 */
// All Javascript objects have a prototype object. It's how Javascript does inheritence.
// The prototype object is accessible in node through the property __proto__
// Due to linking in the proto-chain (or prototype chain):
// - object1 will have an object1.prop1, object1.prop2 and a object1.prop3
// - object2 will have an object2.prop2, object2.prop3

// How to directly specify what an object's prototype is? Function Constructors
// Function Constructors are normal functions that is used to construct objects
// When a function constructor is run, the 'this' variable points to a new empty object.
// We can add properties and functions to that empty object and that object is returned from the function automatically.

// Below is a function constructor:
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Below is attaching a greet property with an anonymous function/function-expression that prints out 'Hello, firstName lastName'
Person.prototype.greet = function() {
    console.log("Hello I'm", this.firstName, this.lastName);
};

// Can assign using bracket notation
Person.prototype['bye'] = function() {
    console.log("Bye from", this.firstName, this.lastName);
};

var john = new Person('John', 'Doe'); // the new keyword is the thing that causes Javascript to return the new object with all the set variables
var mary = new Person('Mary', 'Doe');

console.log(john.firstName + " " + john.lastName);
john.greet();
john.bye();

console.log(mary.firstName + " " + mary.lastName);
mary.greet();
mary.bye();

// Can see the prototype object with the V8 javascript engine by looking at the __proto__ property, we can see what's in the prototype object
console.log(john.__proto__); // will print "Person { greet: [Function] }"
console.log(mary.__proto__);

// Can see they're pointing to the same prototype object:
console.log("Are the prototype objects for john and mary objects the same? ", john.__proto__ === mary.__proto__ ? "Yes" : "No");

// WHAT IF? (Outside the scope, I'm just fucking around here)
// // What if we call the Constructor Function like a regular function that just returns the this? Like below
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return this;
// }
//
// // Assignment of an anonymous function to the prototype will still work
// Person.prototype.greet = function() {
//     console.log("Hello I'm", this.firstName, this.lastName);
// };
// // **WARNING** without the new, the function will set the firstName and lastName on the global this and return the global this, it will not create a new empty object and return this set on an empty object!!
// var jane = Person('Jane', 'Doe');
// console.log(jane.firstName); // Logging out jane.firstName will still work but jane object now points to the global this instead which is NOT what you ever want
// console.log(jane.__proto__); // Will have NO prototype object
// jane.greet(); // because jane doesn't have a prototype object, this line will crash
