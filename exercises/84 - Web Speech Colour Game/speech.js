import { handleResult } from './handlers';
import { colorsByLength, isDark } from "./colors";

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      color =>
      `<span class="color ${color} ${isDark(color) ? 'dark' : ''}" style="background: ${color};">${color}</span>`
    ).join("");
}

window.SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

function start() {
  // see if the browser supports speech recognition
  if(!('SpeechRecognition' in window)) {
    console.log('Sorry, your browser does not support speech reco.');
    return;
  }
  // if it does work
  // make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
