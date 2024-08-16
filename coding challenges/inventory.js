// Define the inventory object with prices in USD
const inventoryUSD = {
    "Apple": 1.5,
    "Banana": 0.75,
    "Orange": 1.0,
    "Milk": 2.5,
    "Bread": 1.2
};

// Define the exchange rate from USD to INR
const exchangeRate = 80;

// Convert the inventory prices to INR
function convertPricesToINR(inventory, rate) {
    // Use Object.entries to get an array of [key, value] pairs
    const entries = Object.entries(inventory);

    // Use map to transform each entry to its INR equivalent
    const convertedEntries = entries.map(([item, priceUSD]) => {
        return [item, priceUSD * rate];
    });

    // Use Object.fromEntries to convert the array back to an object
    return Object.fromEntries(convertedEntries);
}

// Convert the prices and store the result in a new object
const inventoryINR = convertPricesToINR(inventoryUSD, exchangeRate);

// Print the converted inventory
console.log("Inventory in INR:");
console.log(inventoryINR);
