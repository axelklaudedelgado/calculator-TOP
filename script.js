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

display = document.querySelector("#screen");