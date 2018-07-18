var greeting = 'Hello world!!!!';

function greet() {
    console.log(greeting);
}

// even though there is a greeting property (a string), people cannot access it because we are only exporting an object
// that ONLY contains the greet function
module.exports = {
    greet: greet
};