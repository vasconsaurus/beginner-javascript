import anotherWhatever, { returnHi as sayHi, title, manu, middle } from "./utils.js";
// import whatever from './wes.js';
import * as everything from './wes.js';
import { handleButtonClick } from "./handlers.js";

const name = 'wes'
console.log(sayHi(name));

console.log(title)
console.log(manu, middle)
// console.log(whatever)
console.log(anotherWhatever)
console.log(everything)

const button =  document.querySelector('button');
button.addEventListener('click', handleButtonClick);
