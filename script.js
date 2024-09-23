let currentInput = "";
let operation = "";
let previousInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = "";
    document.getElementById("display").value = "";
}

function performOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case "addition":
            result = Math.round(prev + current);
            break;
        case "subtraction":
            result = Math.round(prev - current);
            break;
        case "multiplication":
            result = Math.round(prev * current);
            break;
        case "division":
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = Math.round(prev / current);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
}
