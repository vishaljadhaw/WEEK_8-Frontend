let n = parseInt(process.argv[2]); // Get number from command line

if (isNaN(n)) {
    console.log("Please provide a valid number.");
    process.exit(1); // Exit with error code
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Print result
if (isPrime(n)) {
    console.log(n + " is a Prime Number.");
} else {
    console.log(n + " is NOT a Prime Number.");
}
