//6. Vowel Counter
function countVowels(name) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of name) {
        count += vowels.includes(char) ? 1 : 0;
    }
    return count;
}

// Example 
const userName = "Imamuddin";  // Replace with user input
console.log(countVowels(userName));
