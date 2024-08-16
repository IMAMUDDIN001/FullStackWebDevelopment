//10. Correct a bug
function correctQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;  
    }
    return cart;
}

const cartQuantities = [5, 3, 10, 7, 2];  
const correctedCart = correctQuantities(cartQuantities);

console.log(correctedCart); 
