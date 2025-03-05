const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter three numbers (a, b, c) :  ", function(input) {
    let numbers = input.split(" ").map(Number);
    let a = numbers[0], b = numbers[1], c = numbers[2];

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Invalid input! Please enter three valid numbers.");
        rl.close();
        return;
    }

    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    console.log(`1. a + b * c = ${result1}`);
    console.log(`2. a % b + c = ${result2}`);
    console.log(`3. c + a / b = ${result3}`);
    console.log(`4. a * b + c = ${result4}`);

    let maxResult = Math.max(result1, result2, result3, result4);
    let minResult = Math.min(result1, result2, result3, result4);

    console.log(`Maximum result: ${maxResult}`);
    console.log(`Minimum result: ${minResult}`);

    rl.close();
});
