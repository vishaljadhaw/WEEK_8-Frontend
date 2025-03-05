const year = 2024; // Change this value to test different years

// Check if the year is a valid 4-digit number
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
} else {
    console.log("Error: Please enter a valid 4-digit year.");
}
