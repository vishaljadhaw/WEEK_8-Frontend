let start = parseInt(process.argv[2]); // Start of range
let end = parseInt(process.argv[3]);   // End of range

if (isNaN(start) || isNaN(end)) {
    console.log("Please provide valid numbers for the range.");
    process.exit(1);
}

if (start > end) {
    console.log("Invalid range. Start should be less than or equal to end.");
    process.exit(1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Find and print prime numbers in the given range
console.log(`Prime numbers between ${start} and ${end}:`);
for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
