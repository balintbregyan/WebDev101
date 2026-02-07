const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = `The bill was ${bill}$, the tip was ${tip}$ and the total value is ${bill + tip}$ `;
console.log(totalValue);
