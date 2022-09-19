// From function declarations to explicit and implicit return functions (one of each).

function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
const explicit_return = (welcome) => {welcome}
const implicit_return = () => 'Welcome to Appleseeds Bootcamp!'

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
const explicit_return2 = a => {Math.pow(a, 2)}
const implicit_return2 = a => 

// From function expressions to IIFE functions.

const squareRoot = a => Math.sqrt(a);

(function(a){
    Math.sqrt(a);
})();

const randomNumbers = (a, b) => Math.random() * (a - b) +b;

(function(a,b){
    Math.random() * (a - b) +b;
})();

