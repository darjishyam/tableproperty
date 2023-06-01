setTimeout takes a function as the 1st argument and optional timeout delay & list of values as the function parameters
setTimeout returns an id (number) which can be used to stop the setTimeout using clearTimeout function

setTimeout(function (text) {
    console.log(text);
}, 3000, 'Hello, World');


setTimeout(() => console.log('Hello, World'), 3000);

setTimeout(console.log, 3000, 'Hello, World');