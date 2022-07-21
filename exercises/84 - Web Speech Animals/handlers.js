export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  let animal = words.toLowerCase();
  animal = animal.replace(/\s/g,'');

  const caption = document.querySelector(`.${animal}`);
  caption.classList.add('got');
  console.log(caption)
}
