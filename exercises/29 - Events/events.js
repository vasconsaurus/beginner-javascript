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

function handleBuyButtonClick() {
  console.log('You are buying it!');
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
})
