var fs = require('fs');

// __dirname is one of the parameters passed to me when the entire file is wrapped in a function
// it gives us the path to the directory that the code is running in
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // encoding is optional but specified here for explicity sake
console.log(greet);
// readFileSync is a synchronous file read operation. This may be used to read configuration settings

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', // if we don't include this encoding, console.log will simply return the raw data from teh buffer
    // callback function to call once the libuv event loop has completely reading the file
    function(error, data) { // This is an example of an error-first callback pattern where the first parameter of the callback is the error. Will be null if no error.
        console.log(data);
    }
);
console.log(greet2);

console.log('Done'); // Will show us that the greet is processed first then done will print THEN greet2 will print.