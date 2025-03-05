let n = parseInt(process.argv[2]); // Get number from command line

if (isNaN(n) || n <= 0) {
    console.log("Enter a valid positive number.");
    process.exit(1);
}

console.log(`Prime factors of ${n}:`);

// Divide by 2 until n is odd
while (n % 2 === 0) {
    console.log(2);
    n /= 2;
}

// Check for odd factors from 3 onwards
for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}

// If n is still greater than 2, it's a prime number
if (n > 2) {
    console.log(n);
}
