//3. Color Mixer
// Function to mix two colors and determine the resulting color
function mixColors(color1, color2) {
    let result;

    // Convert colors to lowercase to ensure case-insensitive matching
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    // Use a switch statement to determine the resulting color
    switch (`${color1}-${color2}`) {
        case 'red-blue':
        case 'blue-red':
            result = 'purple';
            break;
        case 'red-yellow':
        case 'yellow-red':
            result = 'orange';
            break;
        case 'blue-yellow':
        case 'yellow-blue':
            result = 'green';
            break;
        default:
            result = 'Invalid color combination';
    }

    // Output the result
    console.log(`The result of mixing ${color1} and ${color2} is ${result}`);
}

// Example usage
const color1 = 'Red';
const color2 = 'Yellow';

// Call the mixColors function
mixColors(color1, color2);
