// Get command-line argument (ignoring first two default arguments)
const args = process.argv.slice(2);

// Convert input argument to number
const n = parseInt(args[0]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer as input.");
    process.exit(1);
}

// Print table of powers of 2 up to 2^n
console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
