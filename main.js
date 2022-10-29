let currentValue = "";

document.addEventListener("DOMContentLoaded", function(){
    //stores all numbers in JS
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    // make a previous screen thing. yaaaaaaa also a display

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))
});

function handleNumber(num){
    currentValue += number;
    console.log(num);
}


// https://www.youtube.com/watch?v=Kyxvms8pnSU