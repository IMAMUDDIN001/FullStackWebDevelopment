//9. Check for divisibility.
function checkDivisibility(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 3 !== 0 || num % 2 === 0) {
            continue;
        }
        console.log(num);
    }
}

// Example usage
const numbersArray = [1, 3, 6, 9, 12, 15, 18, 21, 24];
checkDivisibility(numbersArray);
