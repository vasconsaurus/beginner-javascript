// to install parcel: npm install --save-dev parcel
// the command wes used didnt work

// to run parcel: npx parcel index.html

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const corsProxy = 'https://cors-anywhere.herokuapp.com/'
const form = document.querySelector('form.search')
const recipesGrid = document.querySelector('.recipes')

async function fetchRecipes(query) {
  const response = await fetch(`${corsProxy}${baseEndpoint}/?q=${query}`);
  const data = await response.json();
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  fetchAndDisplay(form.query.value)
}

async function fetchAndDisplay(query) {
    // turn the form(el) off
    form.submit.disabled = true
    // submit the search
    const recipes = await fetchRecipes(query);
    form.submit.disabled = false

    displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('creating html')
  const html = recipes.map(recipe => {
    return `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
    <a href="${recipe.href}">View Recipe</a>
    </div>
    `
  })
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
// on page load run with pizza
fetchAndDisplay('pizza')
