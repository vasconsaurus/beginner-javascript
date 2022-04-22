const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true
  })
  // mark all tabs unselected
  tabButtons.forEach( tab => {
    tab.setAttribute('aria-selected', false);
  })
  // mark clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find associated tabPanel and show it
  const id = event.currentTarget.id;

  // method 1
  // const tabPanel = tabs.querySelector(`
  // [aria-labelledby="${id}"]`);
  // tabPanel.hidden = false;

  // method 2
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
