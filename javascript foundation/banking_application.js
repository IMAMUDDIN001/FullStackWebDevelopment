//17. Build a banking application
// Define a customer account object
const customerAccount = {
    name: 'Imamuddin Shaikh',
    balance: 1000,

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs. ${amount}. New balance: Rs. ${this.balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    },

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew Rs. ${amount}. New balance: Rs. ${this.balance}`);
            } else {
                console.log('Insufficient balance.');
            }
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }
};

// Example 
customerAccount.deposit(500);  
customerAccount.withdraw(200);   
customerAccount.withdraw(2000);  // Tries to withdraw Rs. 2000 (insufficient funds)
