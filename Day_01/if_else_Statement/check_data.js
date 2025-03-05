// Get command-line arguments (skip first two default arguments)
const args = process.argv.slice(2);

// Check if two arguments are provided
if (args.length < 2) {
    console.log("Please provide both day and month as arguments.");
    process.exit(1); // Exit the program if inputs are missing
}

// Convert inputs to numbers
let day = parseInt(args[0]);
let month = parseInt(args[1]);

// Function to check if the date is between March 20 and June 20
function isBetweenMarch20AndJune20(day, month) {
    if ((month === 3 && day >= 20) ||  // March 20 or later
        (month > 3 && month < 6) ||    // April & May (full months)
        (month === 6 && day <= 20)) {  // June 20 or earlier
        return true;
    }
    return false;
}

// Validate input and print result
if (!isNaN(day) && !isNaN(month) && day > 0 && month > 0 && month <= 12) {
    console.log(`Day: ${day}, Month: ${month}`);
    console.log("Result:", isBetweenMarch20AndJune20(day, month));
} else {
    console.log("Invalid input. Please enter a valid day and month.");
}
