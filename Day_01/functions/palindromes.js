function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}

// Function to check if two numbers are palindromes
function checkPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes! `);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not. `);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not. `);
    } else {
        console.log(`${num1} and ${num2} are not palindromes. `);
    }
}

// Example Usage
checkPalindromes(121, 454);  // Both palindromes
checkPalindromes(121, 123);  // One is palindrome
checkPalindromes(123, 456);  // None are palindromes
