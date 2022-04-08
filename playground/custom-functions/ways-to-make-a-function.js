// regular function declaration
// function declared as functions are hoisted
// function doctorize(name) {
//   return `Dr. ${name}`
// }

// anon function
// function (name) {
//   return `Dr. ${name}`
// }

// function expression
// function declared as variable are not hoisted
// const doctorize = function (name) {
//   return `Dr. ${name}`
// }

// arrow functions
// are anonymous
// if there is only one argument you can remove the () from the param
// implicit return
// const inchToCM = inches => inches * 2.54
// const add = (a, b = 3) => a + b

// returning an object
// 1.
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }

// this is fine, and probably easier to read
// 2.
// const baby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }

// 3.
// const baby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
// () always run first in js
(function(age){
  console.log('running anon function')
  return 'you are cool and age ${age}';
})(10)

// METHODS
// a function that lives inside of an object
// wes.sayHi is a method
const wes = {
  name: 'Wes Bos',
  // method
  sayHi: function() {
    console.log(this)
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // shorthand method
  yellHi() {
    console.log('HEY WEEES')
  },
  // arrow function
  wisperHi: () => {
    console.log('...hiiii....');
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('great!');
}

// button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('nice job')
});

// timer callback
setTimeout(function() {
  console.log('done!')
}, 1000)
