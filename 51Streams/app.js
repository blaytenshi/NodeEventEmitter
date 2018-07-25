// A 'chunk' is a piece of data being sent through a stream
// Data is split into chunks and is streamed

// Streams are an abstract class (base class concept in java).
// They're a type of constructor you never work directly with but inherit from.
// We create new custom objects which inherit from the abstract base class.

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt');

// readstream has a buffer inside of it. The size of the buffer is 64kilobytes
// readstream actually inherits from EventEmitter and emits a 'data' event when it's buffers are full
readable.on('data', function(chunk) { // callback function where the readstream will return the chunk as a parameter
    // when we log this out, it will print out <Buffer 4c 6f 72 65 ...> data printed in hexadecimal
    // We only get one <Buffer ...> because the contents of greet.txt is only 61kilobytes thereby fitting in the buffer
    // of ReadStream
    console.log(chunk);
});