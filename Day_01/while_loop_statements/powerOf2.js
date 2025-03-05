let n = parseInt(process.argv[2]); // Get n from command line

if (isNaN(n) || n < 0) {
    console.log("Enter a valid non-negative number.");
    process.exit(1);
}

let power = 0;
let value = 1; // 2^0 = 1

console.log(`Powers of 2 up to 2^${n} or 256:`);

while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    power++;
    value *= 2;
}
