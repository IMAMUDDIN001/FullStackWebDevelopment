//11. Unit converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Example usage
const celsiusTemperature = 25;  // Example Celsius temperature
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
