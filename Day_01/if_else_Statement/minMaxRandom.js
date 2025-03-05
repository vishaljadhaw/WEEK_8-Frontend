// Generate 5 random 3-digit numbers (100-999)
let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

// Store numbers in an array
let numbers = [num1, num2, num3, num4, num5];

// Find the minimum and maximum values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Display the results
console.log("Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
