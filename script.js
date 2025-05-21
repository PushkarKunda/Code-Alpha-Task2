let display = document.getElementById('display');
let currentInput = '0';

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  display.textContent = currentInput;
}

function calculate() {
  try {
    // Replace × and ÷ with * and / for eval
    let expression = currentInput.replace('×', '*').replace('÷', '/');
    let result = eval(expression);
    
    // Check for division by zero
    if (!isFinite(result)) {
      display.textContent = 'Error';
      currentInput = '0';
      return;
    }
    
    // Round to 6 decimal places to avoid floating-point issues
    result = Math.round(result * 1000000) / 1000000;
    display.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    display.textContent = 'Error';
    currentInput = '0';
  }
}