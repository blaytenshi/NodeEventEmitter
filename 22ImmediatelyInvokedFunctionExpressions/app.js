// Scope: Where in code you have access to a particular variable or function

// This is a function. Familiar. Will log out 'boo' nothing complicated.
function boo() {
    console.log('boo');
}
boo();

// This is also a function. The function inside, however is anonymous, thus, a function expression.
// Will log out 'boo again', again, nothing complicated
var booAgain = function() {
    console.log('boo again');
};
booAgain();

// This is actually the same function as booAgain except the anonymous function/function expression is wrapped in parentheses ()
// Calling booThirdTime with a set of parentheses () will still log out 'boo a third time';
var booThirdTime = (function() {
    console.log('boo a third time');
});
booThirdTime();

// This fourth example is actually the booThirdTime but with an added set of parentheses () after the first set of parentheses.
// Just imagine the first set of parentheses as the booThirdTime variable and you're adding the () to 'call' the function!
// This is now officially an IIFE, Immediately Invoked Function Expression as in, it will immediately invoke itself when the code is run!
// Again, will log out 'last boo i swear'. Still simple.
(function() {
    console.log('last boo i swear');
})();

// This fifth (and final) example is actually the last IIFE with a slight tweek. See the second set of parentheses?
// That's right! It's moved INSIDE the first set of parentheses. This is important to understanding how modules and scoping
// ties together to form javascript modules that are intrinsic to Node.js.
(function() {
    console.log('alright! this REALLY is the last one!');
}());

// Below will print out John and then Jane. The two firstName variables will not clash because the IIFE SCOPES each variable
// of the same name to their own parts of memory.
var firstName = 'Jane';

(function() {
    var firstName = 'John';
    console.log(firstName); // logs out John
}());

console.log(firstName); // logs out Jane