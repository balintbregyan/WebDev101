const country = "Hungary";
const continent = "Europe";
let population = 50;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language = "arabic";
console.log(isIsland);
console.log(language);

console.log(population / 2);

console.log(population);
console.log(population > 5);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description1);

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  const difference = 33 - population;
  console.log(`${country}'s population is ${difference} million below average`);
}

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> ? false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? 1143

// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );
// console.log(numNeighbors);
// numNeighbors = Number(numNeighbors);

// if (numNeighbors === 1) {
//   console.log("Only 1 neighbor!");
// } else {
//   console.log("More than 1 neighbor!");
// }

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
