const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a single-digit number (0-9): ", function(num) {
    if (num == 0) {
        console.log("Zero");
    } else if (num == 1) {
        console.log("One");
    } else if (num == 2) {
        console.log("Two");
    } else if (num == 3) {
        console.log("Three");
    } else if (num == 4) {
        console.log("Four");
    } else if (num == 5) {
        console.log("Five");
    } else if (num == 6) {
        console.log("Six");
    } else if (num == 7) {
        console.log("Seven");
    } else if (num == 8) {
        console.log("Eight");
    } else if (num == 9) {
        console.log("Nine");
    } else {
        console.log("Invalid input! Please enter a number between 0-9.");
    }
    rl.close();
});
