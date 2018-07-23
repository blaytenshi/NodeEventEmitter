'user strict';

// Moved everything to greetr.js!
var Greetr = require('./greetr.js');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');