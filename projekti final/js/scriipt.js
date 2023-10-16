function getValidNumber() {
    var userInput;
    var isValid = false;

    while (!isValid) {
        userInput = prompt("Please enter a number:");

   
        if (!isNaN(userInput) && userInput !== null) {
            isValid = true;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }

    return parseFloat(userInput);
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        alert('Success! This is the result: ' + result);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function squareRoot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        document.getElementById('display').value = result;
        alert('Success! Square root of ' + currentValue + ' is ' + result);
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function increment() {
    const currentValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(currentValue)) {
        const result = currentValue + 1;
        document.getElementById('display').value = result;
        alert('Success! Incremented value: ' + result);
    } else {
        document.getElementById('display').value = 'Error';
    }
}




    let calculatorInput = "12345";
let newInput = clearLastCharacter(calculatorInput);
console.log(newInput);
    




// Example usage
var validNumber = getValidNumber();
console.log("You entered a valid number: " + validNumber);
