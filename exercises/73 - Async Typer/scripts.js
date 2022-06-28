function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// we pass Math.random as randomNumber because that makes it easier to test
// because the default value is Math.random, it will result in a random value
// but we can pass a fixed number as the third atributte and check if we are getting the correct value
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// recursion
// function draw(el) {
//   let index = 1;
//   const text = el.textContent;
//   const { typeMin, typeMax } = el.dataset;
//   async function drawLetter() {
//     el.textContent = text.slice(0, index);
//     index += 1;
//     // wait for some time
//     // every time a letter is drawn a new random number is generated
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//     // exit condition
//     if (index <= text.length) drawLetter();
//   }

//   drawLetter();
// }

// recursion with a loop rewriting it forever
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // wait for some time
    await wait(amountOfTimeToWait);
    // exit condition
    if (index <= text.length) drawLetter();
    if (index == text.length + 1) index = 1;
  }

  drawLetter();
}


document.querySelectorAll('[data-type]').forEach(draw)
