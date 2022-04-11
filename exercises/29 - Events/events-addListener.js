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

function buyItem() {
  console.log('Buying Items')
}

function attachEventListenerToBuyButton(buyButton) {
  buyButton.addEventListener('click', buyItem);
}

buyButtons.forEach(attachEventListenerToBuyButton);

// ///////////////////

const sellButtons = document.querySelectorAll('button.sell')

// the downside of the arrow function for the addEventListener > you can't unbind it
sellButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('sold!')
  })
})
