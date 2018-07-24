// Buffers hold raw binary numbers. Available in node.
// It is a global type like Date object

// There are two ways to instantiate a Buffer object.
// First is to give it the actual data to hold plus the optional encoding.
var buf = new Buffer('Hello', 'utf8'); // utf8 is the default if not specified. Shown here for clarity.
// Second is to give it the a size
var sizeBuffer = new Buffer(8);

console.log(buf); // This will print out <Buffer 48 65  6c 6f>. THe values after the buffer is a hex representation of the 'Hello' (Still in UTF8 encoding)
console.log(buf.toString()); // This will print out the contents of the Buffer by applying the encoding format to decode the data
console.log(buf.toJSON()); // This will print { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }, the numbers being decimal notation of 'Hello' that match UTF8 set
console.log(buf[2]); // The buffer behaves like an array, so you can get a particular value out of the buffer at a particular place

buf.write('wo'); // This will overwrite the first to values of the buffer, 'He' with 'wo'
console.log(buf.toString()); // Here we can see that we've mutated the contents of the buffer as it will log out 'wollo'