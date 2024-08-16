//14. Calculate the final order price
const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
        return total + (item.unitPrice * item.quantity);
    }, 0);
};

// Example 
const cart = [
    { unitPrice: 200, quantity: 3 },   
    { unitPrice: 150, quantity: 2 },   
    { unitPrice: 500, quantity: 1 },  
    { unitPrice: 100, quantity: 4 }   
];

const totalPrice = calculateTotalPrice(cart);

console.log(`Total Price: Rs. ${totalPrice}`);
