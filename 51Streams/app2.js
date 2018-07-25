var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8' // this is an options configuration object that can configure the ReadStream, here we're specifying encoding
});

// readstream has a buffer inside of it. The size of the buffer is 64kilobytes
readable.on('data', function(chunk) {
    console.log(chunk); // will log out in english
    console.log(chunk.length); // will log out the actual length (in bytes)
});