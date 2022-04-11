// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// const list = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const list = `
  <ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
  </ul>
`;
// put that list into the above wrapper
// const myListFragment = document.createRange().createContextualFragment(list);
// document.body.prepend(myListFragment);

// or
div.innerHTML = list;
console.log(div);

// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src = 'https://picsum.photos/500';
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'cute puppy';
// Append that image to the wrapper
div.append(myImage);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const paragraphsDiv = document.createElement('div')
paragraphsDiv.innerHTML = `
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
`;

document.body.prepend(paragraphsDiv);
// add a class to the second paragraph called warning
paragraphsDiv.lastElementChild.lastElementChild.classList.add('warning');
// remove the first paragraph
paragraphsDiv.firstElementChild.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const functionDiv = document.createElement('div');
  functionDiv.classList.add('playerCard');

  functionDiv.innerHTML = `
  <h2>${name} – ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
  <button class="delete" type="button">&times; Delete?</button>
  `;

  return functionDiv;

}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
const manu = generatePlayerCard('manu', 36, 1.64);
const fe = generatePlayerCard('fe', 36, 1.64);
const ceu = generatePlayerCard('ceu', 36, 1.64);
const lina = generatePlayerCard('lina', 36, 1.64);

// append those cards to the div
cardsDiv.append(manu);
cardsDiv.append(fe);
cardsDiv.append(ceu);
cardsDiv.append(lina);

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// placed it inside the html string
// select all the buttons!
const buttons = document.querySelectorAll("button")

// make out delete function
function deleteCard(event) {
  const clickedButton = event.currentTarget
  clickedButton.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener("click", deleteCard));
