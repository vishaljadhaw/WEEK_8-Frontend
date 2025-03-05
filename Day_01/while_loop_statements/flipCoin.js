let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let randomNum = Math.random();
    let coinFlip = randomNum < 0.5 ? "Heads" : "Tails";

    if (coinFlip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`${coinFlip} (Heads: ${headsCount}, Tails: ${tailsCount})`);
}

console.log(`\n${headsCount === 11 ? "Heads" : "Tails"} wins 11 times! 🎉`);
