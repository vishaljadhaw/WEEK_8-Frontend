const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

// Function to get user input
function getTemperatureConversion() {
    console.log("Choose Conversion:");
    console.log("1: Celsius to Fahrenheit");
    console.log("2: Fahrenheit to Celsius");

    rl.question("Enter your choice (1 or 2): ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter temperature in Celsius (0-100): ", (degC) => {
                    degC = parseFloat(degC);
                    if (degC < 0 || degC > 100 || isNaN(degC)) {
                        console.log("Invalid input! Enter a value between 0°C and 100°C.");
                    } else {
                        console.log(`${degC}°C = ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
                    }
                    rl.close();
                });
                break;

            case "2":
                rl.question("Enter temperature in Fahrenheit (32-212): ", (degF) => {
                    degF = parseFloat(degF);
                    if (degF < 32 || degF > 212 || isNaN(degF)) {
                        console.log("Invalid input! Enter a value between 32°F and 212°F.");
                    } else {
                        console.log(`${degF}°F = ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
                    }
                    rl.close();
                });
                break;

            default:
                console.log("Invalid choice! Please enter 1 or 2.");
                rl.close();
        }
    });
}

// Start program
getTemperatureConversion();
