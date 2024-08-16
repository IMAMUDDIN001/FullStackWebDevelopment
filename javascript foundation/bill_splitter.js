//13. Bill splitter
function splitBill(dishes, numPeople) {
    // Calculate the total cost of all dishes
    const totalBill = dishes.reduce((sum, cost) => sum + cost, 0);

    // Calculate the cost per person
    const billPerPerson = numPeople > 0 ? totalBill / numPeople : 0;

    // Return an object with the total bill and the bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example 
const dishCosts = [1500, 2500, 1200, 1800];  // Costs of each dish
const numberOfPeople = 4;  // Number of people sharing the bill
const result = splitBill(dishCosts, numberOfPeople);

console.log(`Total Bill: Rs. ${result.totalBill}`);
console.log(`Bill Per Person: Rs. ${result.billPerPerson}`);
