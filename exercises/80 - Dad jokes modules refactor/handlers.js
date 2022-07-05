import { jokeHolder, jokeButton, buttonText } from "./elements.js";
import { fetchJoke } from "./lib.js";
import { randomItemFromArray } from "./utils.js";

export async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}
