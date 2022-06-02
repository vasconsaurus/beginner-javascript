const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// an array to hold our state
// state: a bunch of data that reflects the state of the app
// a list of the items, items id, items state etc
let items = [];

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
      <input type="checkbox" value="${item.id}" ${item.complete ? 'checked' : ''}>
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
      </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('mirror');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  // pull the items from local storage (ls)
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // lsItems.forEach((item) => items.push(item));
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // update list without deleted items
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('marking', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// event delegation: we listen on the click on the list <ul> but then delegate the click over to the button, if that is what was clicked
list.addEventListener('click', function(event) {
  const id = parseInt(event.target.value)
  if(event.target.matches('button')) {
    deleteItem(id);
  }
  if(event.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});


restoreFromLocalStorage();
