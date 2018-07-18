// Function Constructor
// Remember when this function creator is used in conjuction with the new keyword (class keyword in ES6 or object.create),
// the function will return a new object with those properties.
function Greetr() {
    this.greeting = 'Hello world!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

// the new object is then assigned to module.exports
module.exports = new Greetr();