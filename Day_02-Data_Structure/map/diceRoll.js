// Function to simulate die roll and count occurrences
function rollDieSimulation() {
    let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let reachedMax = false;
    
    while (!reachedMax) {
        let roll = Math.floor(Math.random() * 6) + 1;
        counts[roll]++;
        
        if (counts[roll] === maxRolls) {
            reachedMax = true;
        }
    }
    
    let maxNum = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
    let minNum = Object.keys(counts).reduce((a, b) => (counts[a] < counts[b] ? a : b));
    
    console.log("Final Counts:", counts);
    console.log("Number that appeared the most:", maxNum);
    console.log("Number that appeared the least:", minNum);
}

// Run the simulation
rollDieSimulation();