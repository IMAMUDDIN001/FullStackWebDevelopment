//7. Remove Duplicates
function removeDuplicates(cart) {
    return [...new Set(cart)];
}

// Example 
const customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueCart = removeDuplicates(customerCart);

console.log(uniqueCart); 
