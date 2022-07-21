import { animals } from "./animals.js";
import { handleResult } from './handlers.js';

const animalsAlbum = document.querySelector('.animals');

// let img = new Image
// // img.src = new URL("images/macaco.jpg", import.meta.url)
// img.src = require("./images/macaco.jpg")
// figure.appendChild(img)

function displayAnimals(animals) {
   return animals
    .forEach(function(animal) {
      let animalPair = document.createElement('div');
      animalPair.classList.add('animal');

      let img = new Image;
      img.src = `./images/${animal}.jpg`;
      img.classList.add('animal-img');
      animalPair.appendChild(img);

      let name = document.createElement('caption');
      name.textContent = `${animal}`;
      name.classList.add('animal-name');
      name.classList.add(`${animal}`);
      animalPair.append(name)

      animalsAlbum.appendChild(animalPair);
    }
    );
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
displayAnimals(animals);
