//15. Calculate the percentage of the discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
        throw new Error('Original price must be greater than zero');
    }
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discount.toFixed(2); 
};

// Example 
const originalPrice = 1000;  
const discountedPrice = 750; 
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

console.log(`Discount Percentage: ${discountPercentage}%`);
