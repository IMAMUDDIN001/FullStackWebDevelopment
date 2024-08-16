// 1. Reverse String.
let input = "Hello, World!";

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// setTimeout to delay the reversal of the string
setTimeout(() => {

    let reversedString = reverseString(input);
    
    // Print the reversed string
    console.log(reversedString);
}, 2000);

//2. Random Number Generator with Delay and Progress Indication:
