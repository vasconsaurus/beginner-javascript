function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup entirely
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async (resolve) => {
    // 1. we need to create a popup with all the fields in it
    const popup = document.createElement('form'); // this will immediately return us a dom node
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );

    // 2. check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // listen for a click on cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // 3. listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        // remove it from the dom entirely
        destroyPopup(popup);
      },
      { once: true }
    );
    // 4. when submited, resolve the data that was inputed
    // insert that popup into the dom
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const shouldCancel = button.hasAttribute('data-cancel'); // or: 'cancel' in button.dataset
  const answer = await ask({
    title: button.dataset.question,
    cancel: shouldCancel,
  });
}

// select all buttons that have a question
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer)
//   }
// }

// askMany();

async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    // const result = await callback(item);
    // results.push(result);
    // or
    results.push(await callback(item));
  }
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
