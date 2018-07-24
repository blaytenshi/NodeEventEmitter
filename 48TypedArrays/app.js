var buffer = new ArrayBuffer(8); // ArrayBuffer accepts an integer to set byte length, 8 bytes is 64 bits (1 byte is 8 bits)
console.log(buffer);

// ArrayBuffer comes from V8 engine not node
var view = new Int32Array(buffer); // this is a way for us to deal with the binary data in the buffer. If you change the array, you're changing the buffer. When we read from the array, we're reading from the buffer.

// Int32Array is an array of integers stored with 32 bits. See below for an illustrated view of what's happening
// Initially once both ArrayBuffer and Int32Array has been initialised
// [ 0: 00000000, 1: 00000000, 2: 00000000, 3: 00000000, 4: 00000000, 5: 00000000, 6: 00000000, 7: 00000000 ] <-- Buffer (with size of 8 bytes/64bits), empty values all 0s
// [ 0: 00000000000000000000000000000000, 1: 00000000000000000000000000000000 ] <-- Int32Array where each entry in the array is a value of 32 bits, empty values all 0s

view[0] = 5;
// Contents of ArrayBuffer and Int32Array after view[0] = 5 is executed
// [ 0: 00000000000000000000000000000101, 1: 00000000000000000000000000000000 ] <-- Int32Array where each entry in the array is a value of 32 bits Int32Array[0] is now 5
// [ 0: 00000000, 1: 00000000, 2: 00000000, 3: 00000101, 4: 00000000, 5: 00000000, 6: 00000000, 7: 00000000 ] <-- Buffer (with size of 8 bytes/64bits) buffer[3] is also now 5 as it maps across to Int32Array

view[1] = 15;
// Contents of ArrayBuffer and Int32Array after view[1] = 15 is executed
// [ 0: 00000000000000000000000000000101, 1: 00000000000000000000000000001111 ] <-- Int32Array where each entry in the array is a value of 32 bits Int32Array[1] is now 15
// [ 0: 00000000, 1: 00000000, 2: 00000000, 3: 00000101, 4: 00000000, 5: 00000000, 6: 00000000, 7: 00001111 ] <-- Buffer (with size of 8 bytes/64bits) buffer[7] is also now 15 as it maps across to Int32Array

view[3] = 25; // this line won't do anything because the buffer (not the Int32Array) won't hold the extra value because it doesn't have the storage for it
console.log(view);