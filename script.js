function updateDisplay (value) {
    if (display.textContent.length != 12) {
        if (display.textContent == "0" && value != ".") {
            display.textContent = value;
        } else {
            if (value == "." && display.textContent.includes(".")) {
                //pass
            } else {
                display.textContent += value;
            }
        }
    } 
}

function backspace () {
    if (display.textContent.length == 1) {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function clearDisplay () {
    display.textContent = "0";
    expression.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function getDisplayValue () {
    return parseInt(display.textContent);
}

let operator; 
let firstNumber;
let secondNumber;
const expression = document.querySelector(".expression");
const display = document.querySelector(".bottomNumber");
