import { isValidColor } from './colors';

// function logWords(results) {
//   console.log(results[results.length - 1][0].transcript);
// }

export function handleResult({ results }) {
  // logWords(results);
  const words = results[results.length - 1][0].transcript
  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if valid color
  if(!isValidColor(color)) return;
  // if it is, show the ui for that
  const colorSpan = document.querySelector(`.${color}`)
  colorSpan.classList.add('got')
  // change background color
  document.body.style.backgroundColor = color;
  console.log('valid', color)
}
