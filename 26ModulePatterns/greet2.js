// Again we're using the supplied module object and accessing the exports property.
// This time we're adding a greet to the exports property
module.exports.greet = function() {
    console.log('Hello world!');
};