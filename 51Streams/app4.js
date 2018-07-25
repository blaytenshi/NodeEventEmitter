var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8', // this is an options configuration object that can configure the ReadStream, here we're specifying encoding
    highWaterMark: 16 * 1024 // effectively alters the size of the buffer so the returned 'chunks' are in 16 kilobytes
});

// creates a WriteStream that points to the greetcopy.txt file
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readstream has a buffer inside of it. The size of the buffer is 64kilobytes
readable.on('data', function(chunk) {
    // each time the chunk of data is read...
    console.log(chunk);
    // ...it is then written to the greetcopy.txt that writable points to
    writable.write(chunk);
});