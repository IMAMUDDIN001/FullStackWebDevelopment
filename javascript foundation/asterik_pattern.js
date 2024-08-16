//8. InverteW right-angleW triangle pattern with asterisks
function printInvertedTriangle(i) {
    for (let row = i; row >= 1; row--) {
        let stars = '';
        for (let col = 1; col <= row; col++) {
            stars += '*';
        }
        console.log(stars);
    }
}

// Example 
const numberOfRows = 6;  
printInvertedTriangle(numberOfRows);
