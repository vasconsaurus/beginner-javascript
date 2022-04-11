const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');


function handleClick() {
  console.log('🐛 It got clicked!');
}

const hooray = () => console.log('hooraaaay')

butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick)

// ////////////////////

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
  console.log('you clicked a button')
  const button = event.target
  // console.log(button.textContent);
  // console.log('You are buying it!');
  // console.log(parseFloat(event.target.dataset.price))
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget)
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
})

window.addEventListener('click', function(event) {
  console.log('you clicked on the window');
  // event.stopPropagation();
},
{capture: true})

// /////////////////////////

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(event) {
  console.log(event.currentTarget)
  console.log(this)
})

photoEl.addEventListener('mouseenter', event => {
  console.log(event.currentTarget) //favor e.target, event.target in callback functions
  console.log(this) //this isn't scoped to the element inside an arrow function
})
