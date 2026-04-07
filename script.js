let firstNumber = "";
let secondNumber ="";
let operator ="";
let shouldReset = false;

function add(a, b){
    return a + b;
}
function subtract (a,b){
    return a - b;
}
function multiply (a,b){
    return a * b;
}
function divide (a,b){
    return b === 0 ? "Error":a/b;
}
function operate (op, a,b){
    a = Number(a);
    b = Number(b);

    if (op === "+")return add (a,b);
    if (op === "-")return subtract(a,b);
    if (op === "*")return multiply (a,b);
    if (op ==="/") return divide (a,b);
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button =>{
    button.addEventListener("click", ()=> {
        const value = button.textContent;
        //Clears everythng
        if (value === "C"){
            firstNumber="";
            secondNumber = "";
            operator = "";
            display.value = "";
    }
        //OPERATOR
        else if (["+","-","*", "/"].includes(value)){
            firstNumber= display.value;
            operator = value;
            shouldReset = true;
        }
        //DECIMAL
        else if(value === "."){
            if(shouldReset){
                display.value = "0";
                shouldReset = false;
            }
            if(!display.value.includes(".")){
                display.value += ".";
            }
        }
        
        //NUMBERS
        else if (value === "="){
            secondNumber = display.value;
            const result = operate (operator, firstNumber,secondNumber);
            display.value = result;
            firstNumber = result;
            shouldReset = true;
        }
        else {
            if (shouldReset){
                display.value = "";
                shouldReset = false; 
            }
            else {
                display.value += value; // Always add the number
            }
        }

 });
});