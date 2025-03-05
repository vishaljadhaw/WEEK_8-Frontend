function findRepeatedDigits() {
  let repeatedNumbers = [];

  for (let i = 10; i < 100; i++) {
    if (i % 11 === 0) repeatedNumbers.push(i);
  }

  return repeatedNumbers;
}

console.log("Repeated Digits:", findRepeatedDigits());