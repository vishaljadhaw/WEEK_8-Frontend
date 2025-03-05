let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5 ? -1 : 1; // 50-50 chance of losing (-1) or winning (+1)
    
    if (betResult === 1) {
        money++; 
        wins++;
    } else {
        money--;
    }
}

console.log(`Final Amount: ₹${money}`);
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 200 ? "Gambler reached the goal! " : "Gambler went broke! ");