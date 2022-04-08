// function definition
function calculateBill(bill, taxRate = 0.13, tipRate = 0.15) {
  // funtion body
  console.log('Running Calculate Bill!');
  const total = bill + ( bill * taxRate) + (bill * tipRate);
  return total;
}

// funtion call or run
const myTotal = calculateBill(100, 0.13);
console.log(`Your total = $${myTotal}`);

console.log(`Your total = $${calculateBill(250, 0.15)}`);

const kait = 50
const myTotal2 = calculateBill(kait + 30, 0.13)

// undefined so it will use the default value
const myBill = calculateBill(100, undefined, 0.2);
console.log(myBill)

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`
}

const greeting = sayHiTo('Manu');
console.log(greeting);

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
