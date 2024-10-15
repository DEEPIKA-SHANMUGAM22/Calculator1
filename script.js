let display = document.getElementById('display');

// Append symbols to the display
function appendToDisplay(symbol) {
    display.value += symbol;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation when "=" is clicked
function calculate() {
    try {
        let expression = display.value;

        // Handle square root function
        if (expression.includes('sqrt(')) {
            expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        }

        // Calculate the result and update the display
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
