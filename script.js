function updateDisplay(value) {
    const maxLength = 12;
    const currentDisplay = display.textContent;

    if (result) {
        result = null;
        if (!operator) expression.textContent = "";

        display.textContent = (value === ".") ? "0." : value;
        return;
    }

    if (currentDisplay.length >= maxLength) return;

    if (currentDisplay === "0" && value !== ".") {
        display.textContent = value;
        return;
    }

    if (!(value === "." && currentDisplay.includes("."))) {
        display.textContent += value;
    }
}

function backspace () {
    if (!operator) {
        expression.textContent = "";
    }

    if (display.textContent.length == 1 || display.textContent == "Math Error") {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function updateOperator (value) {
    let operatorDisplay; 
    switch (value) {
        case '/':
            operatorDisplay = "÷";
            break;
        case '*':
            operatorDisplay = "×";
            break;
        case '+':
            operatorDisplay = "+";
            break;
        case '-':
            operatorDisplay = "-";
            break;
    }

    if (isNaN(parseFloat(display.textContent))) {
        return;
    }

    if (!operator) {
        operator = value;
    }
    
    if (!firstNumber) {
        firstNumber = parseFloat(display.textContent);
        display.textContent = "0";
        expression.textContent = firstNumber + operatorDisplay;
    } else if (operator) {
        operate();
        firstNumber = result;
        operator = value;
        display.textContent = "0";
        expression.textContent = firstNumber + operatorDisplay;
    } 
}

function clearDisplay () {
    display.textContent = "0";
    expression.textContent = "";
    clearValues();
}

function getDisplayValue () {
    return parseFloat(display.textContent);
}

function clearValues () {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function operate () {
    if (isNaN(parseFloat(display.textContent))) {
        return;
    }

    if (operator) {
        secondNumber = parseFloat(display.textContent);
        expression.textContent += secondNumber + "=";
        result = (operators[operator](firstNumber, secondNumber));
        if (result.toString().length > 12) {
            let resultSplit = result.toString().split(".");
            let decimalLength = 11 - resultSplit[0].length;
            result = result.toFixed(decimalLength);
        }
        if (result === Infinity || result === -Infinity) {
            result = "Math Error"
        }
        display.textContent = result;
        clearValues();
    }
}

function changeSign () {
    if (isNaN(parseFloat(display.textContent))) {
        return;
    }

    if (!operator) {
        expression.textContent = "";
    }

    if (display.textContent != 0) {
        result = null;
        display.textContent.includes("-") ? display.textContent = display.textContent.slice(1) : display.textContent = "-" + display.textContent; 
    }
}

let operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
    '*': function(a, b) { return a * b },
};
let operator; 
let firstNumber;
let secondNumber;
let result;
const expression = document.querySelector(".expression");
const display = document.querySelector(".bottomNumber");
