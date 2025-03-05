// Write a Program to generate a birth month of 50 individuals

// between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print.


let birthMonth = new Map();
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    if (birthMonth.has(month)) {
        months = birthMonth.get(month);
        months.push(i);
    }else{
        let months = [];
        months.push(i);
        birthMonth.set(month , months);
    }
}
console.log(birthMonth);