// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first class
function logGreeting(fn) {
    fn(); // careful with this! If the 'fn' object is not a function, the program will crash!
}

logGreeting(greet);

// function expression - this function is anonymous because it doesn't have a name like in line 18 'greet()'
var greetMe = function() {
    console.log('Hi Tony');
};
greetMe();

// it's first class
logGreeting(greetMe);

// use a function expression on the fly when calling a function
logGreeting(function() {
    console.log('Hello Tony!');
});