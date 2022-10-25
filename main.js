// PAIN

var numOne = 3; // replace with input
var numTwo = 3; // replace with input
let operators = ["+", "-", "*","/"];

const container = document.getElementById("container");

function addition(a,b){
    return a + b;
}

function subtraction(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

function division(a,b){
    return a / b;
}

/*
Create a new function operate that takes an operator and 2 numbers and then calls
one of the above functions on the numbers. Create a basic HTML calculator with buttons
for each digit, each of the above functions and an “Equals” key. Do not worry about wiring 
up the JS just yet. There should also be a display for the calculator. Go ahead and fill it
 with some dummy numbers so it looks correct. Add a “clear” button.
*/

function operate(a,b){
    // takes an operator and 2 numbers and then calls one of the above functions on the numbers.
    const choice = operators[Math.floor(Math.random() * operators.length)];
    return a + choice + b;
}

console.log(eval(operate(numOne,numTwo)));