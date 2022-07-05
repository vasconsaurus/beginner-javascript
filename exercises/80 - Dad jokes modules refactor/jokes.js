import { jokeButton } from "./elements.js";
import { handleClick } from "./handlers.js";
import { fetchJoke } from "./lib.js";

jokeButton.addEventListener('click', handleClick);

fetchJoke();
