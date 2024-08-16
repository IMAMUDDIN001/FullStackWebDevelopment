//2. Calculator
// Function to perform calculation based on operator
function calculator(num1, num2, operator) {
    let result;

    // Switch statement to handle the operation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Handle division by zero
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
                return; // Exit the function
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return; // Exit the function
    }

    // Output the result if a valid operator was provided
    console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
}

// Example 
const num1 = 10;
const num2 = 5;
const operator = '+';

// Call the calculator function
calculator(num1, num2, operator);
