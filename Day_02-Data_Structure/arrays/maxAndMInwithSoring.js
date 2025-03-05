// Function to generate a random 3-digit number
function getRandom3DigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
}

// Generate 10 random numbers and store them in an array
let numbers = Array.from({ length: 10 }, getRandom3DigitNumber);
console.log("Generated Numbers:", numbers);

// QuickSort function
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = arr.filter(num => num < pivot);
    let right = arr.filter(num => num > pivot);
    let middle = arr.filter(num => num === pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Sorting the array using QuickSort
let sortedNumbers = quickSort(numbers);
console.log("Sorted Numbers:", sortedNumbers);

// Finding second largest and second smallest after sorting
let secondSmallestSorted = sortedNumbers[1];
let secondLargestSorted = sortedNumbers[sortedNumbers.length - 2];

console.log("Second Largest (sorted):", secondLargestSorted);
console.log("Second Smallest (sorted):", secondSmallestSorted);