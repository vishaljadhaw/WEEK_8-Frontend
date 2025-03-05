let n = parseInt(process.argv[2]); // Get number from command line

if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative number.");
    process.exit(1);
}

// Function to compute factorial
function factorial(num) {
    if (num === 0 || num === 1) return 1; // Base case
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// Print result
console.log(`${n}! = ${factorial(n)}`);