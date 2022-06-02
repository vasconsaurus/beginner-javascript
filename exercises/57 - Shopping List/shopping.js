const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// an array to hold our state
// state: a bunch of data that reflects the state of the app
// a list of the items, items id, items state etc
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  // if empty don't submit it
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // push items into our state
  items.push(item);

  // clear the form
  e.target.reset();

  // fire off a custom event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
      </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('mirror');
  localStorage.setItem('items', JSON.stringify(items));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
