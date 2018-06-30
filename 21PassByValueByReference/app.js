// Javascript has primitive data types: boolean, string, number, null and undefined
// (Akthully, undefined is a type iteself and null is an object but lets not pull at this string because it gets into the quirky side of Javascript...)
// (More details about it if you wanna pull at the string, here: https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)

// Aside from these types, everything else is an object.
// Simply put, anything that's not an object is a primitive (sort of... again, just leave it)

// All primitives are pass by value. They do not change once instantiated (immutable... leave that string alone dammit!)
// See example:

var a = 5;

function changeA(value) {
    value + 5; // should be 10 right?
}

changeA(a); // call the changeA() function
console.log(a); // naaaah  this will still be 5

// What happened above was the _VALUE_ of variable 'a' was copied and passed to the changeA() function when the function was called
// Therefore nothing actually happens to the actual 'a' variable

// -----
// All objects are pass by reference. They can be changed!
var objectA = {};

function changeObjectA(object) {
    object.prop1 = {}; // This will update the prop1 property on the object passed in
    object.prop2 = 'c'; // This will update too
}

function changeProp2OfObjectA(object) {
    object.prop2 = 'd'; // This will also update the object passed in even though the contents we're changing is a string (supposedly immutable)
}

changeObjectA(objectA);
console.log(objectA); // will log out { prop1: {}, prop2: 'c' }
changeProp2OfObjectA(objectA);
console.log(objectA); // will log out { prop1: {}, prop2: 'd' }

// What happened above was the memory _REFERENCE_ (or address) was copied and passed to the changeObjectA() function. Therefore any changes to the referenced object will change the object itself.
