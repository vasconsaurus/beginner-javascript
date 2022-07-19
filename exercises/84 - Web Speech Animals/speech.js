import { animals } from "./animals.js";

const figure = document.querySelector('.animal');
const figcaption = document.querySelector('.animal-caption');

// let img = new Image
// // img.src = new URL("images/macaco.jpg", import.meta.url)
// img.src = require("./images/macaco.jpg")
// figure.appendChild(img)

function displayAnimals(animals) {
   return animals
    .map(function(animal) {
      let img = new Image
      // img.src = require(`./images/${animal}.jpg`),
      img.src = `./images/${animal}.jpg`,
      figure.appendChild(img)

    }
    ).join('');
}

displayAnimals(animals)
