// Test 1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = (massMark / heightMark) * heightMark;
const BMIJohn = (massJohn / heightJohn) * heightJohn;

const MarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(MarkHigherBMI);

// Test 2

const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = (massMark2 / heightMark2) * heightMark2;
const BMIJohn2 = (massJohn2 / heightJohn2) * heightJohn2;

const MarkHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(BMIMark2);
console.log(BMIJohn2);
console.log(MarkHigherBMI2);
