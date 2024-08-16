// Define the delay in milliseconds
let delay = 3000; // 3 seconds
let interval = 1000; // 1 second
let remainingTime = delay / interval; // Calculate the number of intervals

// Function to generate a random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the countdown and generate the random number
function startCountdownAndGenerateNumber() {
    console.log(`Generating a random number after ${remainingTime} seconds...`);

    // Interval to show the remaining time
    let countdown = setInterval(() => {
        remainingTime -= 1;
        console.log(`Time remaining: ${remainingTime} seconds`);
        if (remainingTime <= 0) {
            clearInterval(countdown); // Clear the interval
            console.log('Generating random number...');
            let randomNumber = generateRandomNumber(1, 100); // Example range from 1 to 100
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, interval);

    // Set timeout to trigger the countdown
    setTimeout(() => {
        // This code runs after the delay
        // The countdown interval is already handling the remaining time display and random number generation
    }, delay);
}

// Start the countdown and random number generation
startCountdownAndGenerateNumber();
