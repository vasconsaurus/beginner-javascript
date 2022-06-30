const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  loader.classList.remove('hidden')
  jokeButton.classList.add('hidden')
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await response.json();
  loader.classList.add('hidden')
  jokeButton.classList.remove('hidden')

  return data;
}

// how I did Random and substituting the content
// function getRandom() {
//   let randomNumber = Math.floor(Math.random() * buttonText.length);
//   return randomNumber
// }

// async function handleClick() {
//   const { joke } = await fetchJoke();
//   jokeHolder.innerHTML = `<p>${joke}</p>`
//   jokeButton.innerHTML = `<button>${buttonText[getRandom()]}</button>`
// }

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)]
  if(item === not) {
    console.log('used it before')
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

jokeButton.addEventListener('click', handleClick);

fetchJoke();
