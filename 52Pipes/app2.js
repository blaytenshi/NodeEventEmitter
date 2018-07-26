var fs = require('fs');
var zlib = require('zlib'); // part of node core that allows you to implement a gzip file (compressed file)

// removed the options as they're not necessary, as default is utf8 and don't need to change buffer size
var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// the pipe method is available on a readable stream
// it accepts a writable stream to write to
// pipe method also returns the destination it was writing to, in this case, the writable object
// because of this, we can chain another pipe method onto the returned value and pipe it to somewhere else
// This only works if the returned object was readable AND writable too. (duplex or transform stream)
readable.pipe(writable);

// this will be the write stream that will take the output from gzip transform stream and pipe it to the .gz file
var compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');

// this is a transform stream that will transform the source file and compress it
var gzip = zlib.createGzip(); // compressing stream

readable.pipe(gzip).pipe(compressed);
