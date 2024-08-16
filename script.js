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

display = document.querySelector("#screen");