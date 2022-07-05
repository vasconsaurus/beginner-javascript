import { loader, jokeButton } from "./elements.js";

export async function fetchJoke() {
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
