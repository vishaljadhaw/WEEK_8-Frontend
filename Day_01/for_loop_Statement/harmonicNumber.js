// Get command-line argument (ignoring first two default arguments)
const args = process.argv.slice(2);

// Convert input argument to number
const n = parseInt(args[0]);

// Validate input
if (isNaN(n) || n <= 0) {
    console.log("Please provide a valid positive integer as input.");
    process.exit(1);
}

// Calculate Harmonic Number
let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}

// Print result
console.log(`The ${n}th Harmonic Number is: ${harmonicNumber}`);
