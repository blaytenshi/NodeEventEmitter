// ** Object properties and methods
// we have an object literal
var obj = {
    greet: 'Hello'
};

// we can print 'Hello' by directly accessing the property using dot notation:
console.log(obj.greet);
// we can also print 'Hello' by using bracket notation and supplying the property name as a string within the []:
console.log(obj['greet']);

// now lets extract the property name into it's own variable and pass that variable into the []
var prop = 'greet';
console.log(obj[prop]); // this bit is key to understanding emitters! keep this in mind!


// ** Functions and arrays
// arrays in javascript can hold many types of things, you can push anything into an array
var arr = [];

// here we're pushing functions into the array. this works because functions are first class (equal to numbers or objects)
arr.push(function() {
    console.log('Hello world 1');
});

arr.push(function() {
    console.log('Hello world 2');
});

arr.push(function() {
    console.log('Hello world 3');
});

// note that only the function itself has been pushed into the array. they have not been invoked yet!
// in order to invoke the functions we have to loop through the array and call it. The following is one method:
arr.forEach(function (arrItem) {
    arrItem(); // this will invoke each of the functions in the array (need to make sure that every item is a function!)
});