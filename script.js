// script.js
let currentInput = "";
let prevInput = "";
let operator = null;
const display = document.getElementById("display");
// Append number to the display
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}
// Choose an operation (+, -, *, /)
function chooseOperation(op) {
    if (currentInput === "") return;
    if (prevInput !== "") {
        calculate();
    }
    operator = op;
    prevInput = currentInput;
    currentInput = "";
}
// Calculate the result
function calculate() {
    let result;
    const prev = parseFloat(prevInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    prevInput = "";
    display.value = currentInput;
}
// Clear the display (AC)
function clearDisplay() {
    currentInput = "";
    prevInput = "";
    operator = null;
    display.value = "";
}
// Delete the last character (DEL)
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
