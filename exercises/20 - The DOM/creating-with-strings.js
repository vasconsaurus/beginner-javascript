console.log('hey')
const item = document.querySelector('.item')

const src=`https://source.unsplash.com/random/300x300`
const desc = `cute pup`

const myHtml = `
<div class="wrapper">
  <h2>${desc}</h2>
  <img src="${src}" alt="${desc}">
</div>
`;

const myFragment = document.createRange()
.createContextualFragment(myHtml);

console.log(myFragment.querySelector('img'));
console.log(myFragment)

document.body.appendChild(myFragment)
