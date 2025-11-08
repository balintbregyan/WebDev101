// // Dolphins's average score
// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// // Koalas's average score
// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;

// Dolphins's average score
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

// Koalas's average score
const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 110;

// Calculate average scores
const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// Minimum score to win
const minScore = 100;

console.log("Dolphins Average Score:", dolphinAverage);
console.log("Koalas Average Score:", koalaAverage);

// Main task
// if (dolphinAverage > koalaAverage) {
//   console.log("Dolphins wins the trophy! 🏆");
// } else if (koalaAverage > dolphinAverage) {
//   console.log("Koalas wins the trophy! 🏆");
// } else if (dolphinAverage === koalaAverage) {
//   console.log("This is a draw!");
// }

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
