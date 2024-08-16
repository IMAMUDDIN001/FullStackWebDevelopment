//12. Calculate rental cost
function calculateRentalCost(days, carType) {
    
    const rentalRates = {
        'Economy': 4000,
        'Midsize': 10000,
        'Luxury': 20000
    };


    const costPerDay = rentalRates[carType];
    const totalCost = costPerDay * days;

    return totalCost;
}

const numberOfDays = 5;
const carType = 'Luxury';
const rentalCost = calculateRentalCost(numberOfDays, carType);

console.log(`The rental cost for ${numberOfDays} days of a ${carType} car is Rs. ${rentalCost}`);
