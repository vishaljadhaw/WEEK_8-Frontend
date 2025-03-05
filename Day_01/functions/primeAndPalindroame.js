// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Function to check if a number's palindrome is also prime
function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let palindrome = getPalindrome(num);
    console.log(`${num} is a prime number.`);
    console.log(`Its palindrome is ${palindrome}.`);

    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number! `);
    } else {
        console.log(`The palindrome ${palindrome} is not a prime number. `);
    }
}

// Example: Get user input and check
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    num = parseInt(num);
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    } else {
        checkPrimeAndPalindrome(num);
    }
    rl.close();
});
