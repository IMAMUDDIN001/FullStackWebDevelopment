//16. Generate a random number
(() => {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random Number: ${randomNumber}`);
})();
