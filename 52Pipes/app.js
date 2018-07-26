var fs = require('fs');

// removed the options as they're not necessary, as default is utf8 and don't need to change buffer size
var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// the pipe method is available on a readable stream
// it accepts a writable stream to write to
// pipe method also returns the destination it was writing to, in this case, the writable object
readable.pipe(writable);

