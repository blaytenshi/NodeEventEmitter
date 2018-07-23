var obj = {
    name: 'John Doe',
    greet: function(param1, param2) {
        console.log(`Hello ${this.name} ${param1} ${param2}`);
    }
}

obj.greet(); // this invokes the greet() function inside the obj object literal
obj.greet.call(); // call() will also invoke the greet() function, the difference is you can pass a paramter into call and whatever you pass in is what the this (as in the this.name) will point to. Here there's nothing so it will print undefined
obj.greet.call({ name: 'Jane Doe' }); // here we passed in an object with a property name with value 'Jane Doe'. It will replace the this and now it will print 'Hello Jane Dow'
obj.greet.apply({ name: 'Jake Doe' }); // does the same thing as call()

// DIFFERENCE BETWEEN call() AND apply()
// When there are extra parameters you want to pass in like in line 3, you pass them in like so with
// call() you use comma seperated values called in order of the variables
obj.greet.call({ name: 'Jimmy Doe'}, 'is', 'awesome');
// apply() you use an array and the params applied in order of the array
obj.greet.apply({ name: 'Matthew Doe'}, ['is', 'cool']);