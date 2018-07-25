var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8', // this is an options configuration object that can configure the ReadStream, here we're specifying encoding
    highWaterMark: 16 * 1024 // effectively alters the size of the buffer so the returned 'chunks' are in 16 kilobytes
});

// readstream has a buffer inside of it. The size of the buffer is 64kilobytes
readable.on('data', function(chunk) {
    // console.log(chunk);
    console.log(chunk.length); // should print out 16384 three times (value of the highWatermark) followed by 12456, the remainder
});