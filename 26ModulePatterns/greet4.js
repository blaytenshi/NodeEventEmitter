// Function Constructor
// the function will return a new object with those properties.
function Greetr() {
    this.greeting = 'Hello world!!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

// This time we're exporting the function constructor ITSELF
module.exports = Greetr;