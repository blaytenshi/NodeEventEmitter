var util = require('util'); // by not including a ./ will tell node to get the file from the core native library. 'util' is a useful core native library.

var name = 'Tony';

// the core native node util library allows us to do many things. One of which is string replacement like below
var greeting = util.format('Hello, %s', name);
// another useful thing is being able to use util.log which is like console.log but with timestamps!
util.log(greeting);

