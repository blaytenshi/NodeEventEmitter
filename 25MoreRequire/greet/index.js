var english = require('./english');
var spanish = require('./spanish');

// when this index.js is required, it will return an object with english and spanish properties with english and spanish functions as their values
module.exports = {
    english: english,
    spanish: spanish
};