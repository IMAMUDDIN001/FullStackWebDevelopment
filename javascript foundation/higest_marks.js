//4. Highest Marks
// Function to find the highest marks in an array
function findHighestMarks(marks) {
    // Initialize the highest mark with the first element of the array
    let highestMarks = marks[0];

    // Iterate through the array to find the highest mark
    for (let i = 1; i < marks.length; i++) {
        // Use the ternary operator to update the highest mark
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    // Display the highest marks to the teacher
    console.log(`The highest marks scored by a student are ${highestMarks}`);
}

// Example 
const marks = [85, 92, 88, 76, 95];  // Array of marks for five students

// Call the function to find the highest marks
findHighestMarks(marks);
