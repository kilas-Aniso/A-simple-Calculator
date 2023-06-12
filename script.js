let displayValue = "";

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += " " + operator + " ";
    updateDisplay();
}

function appendDecimal(decimal) {
    displayValue += decimal;
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "";
        updateDisplay();
        alert("Invalid expression!");
    }
}

function updateDisplay() {
    const display = document.querySelector(".display");
    display.value = displayValue;
}
