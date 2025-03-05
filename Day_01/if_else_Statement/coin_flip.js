// Generate a random number (0 or 1)
let randomNum = Math.random();

// Use if-else to decide Heads or Tails
let coinFlip;
if (randomNum < 0.5) {
    coinFlip = "Heads";
} else {
    coinFlip = "Tails";
}

// Print the result
console.log(coinFlip);
