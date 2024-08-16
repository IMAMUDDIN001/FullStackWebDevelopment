// Password Validator
// Function to validate passwords
function validatePasswords(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Example usage
const password = "pass@123";  // The password entered by the user
const confirmPassword = "pass@123";  // The password confirmed by the user

// Call the function to validate passwords
validatePasswords(password, confirmPassword);
