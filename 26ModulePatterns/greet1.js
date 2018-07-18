// As we understand, the module object is available to us in this file because it will eventually be wrapped inside a function
// after the require() is executed on this file.
// Here we are setting the exports property to the anonymous function/function expression.
module.exports = function() {
    console.log('Hello world');
};