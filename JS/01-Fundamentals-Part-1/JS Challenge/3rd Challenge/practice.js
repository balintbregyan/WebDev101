// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else {
//   console.log("It's a draw!");
// }

// Bonus 1

const scoreDolphins = (97 + 112 + 80) / 2;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy 🏆");
} else {
  console.log("No team wins the trophy 😥");
}

// Main task
if (dolphinAverage > koalaAverage) {
  console.log("Dolphins wins the trophy! 🏆");
} else if (koalaAverage > dolphinAverage) {
  console.log("Koalas wins the trophy! 🏆");
} else if (dolphinAverage === koalaAverage) {
  console.log("This is a draw!");
}

// Bonus 1-2
if (dolphinAverage > koalaAverage && dolphinAverage > minScore) {
  console.log("Dolphins wins the trophy! 🏆");
} else if (koalaAverage > dolphinAverage && koalaAverage > minScore) {
  console.log("Koalas wins the trophy! 🏆");
} else if (dolphinAverage === koalaAverage) {
  console.log("This is a draw!");
} else if (
  (dolphinAverage === koalaAverage && !dolphinAverage < minScore) ||
  !koalaAverage < minScore
) {
  console.log("None of the teams reached the minimum Score!");
}

console.log(scoreDolphins);
