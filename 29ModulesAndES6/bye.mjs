function sayBye() {
    console.log('Bye');
}

const myName = 'John';

// can export without having to specify the property name and value! can just put the value and ES6 will think it's the property name
export {
    sayBye,
    myName
}