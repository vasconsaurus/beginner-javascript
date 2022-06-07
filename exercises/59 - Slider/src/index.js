function Slider(sliderEl) {
  if(!(sliderEl instanceof Element)) {
    throw new Error('No slider passed in')
  }

  // create some variables for working with slider
  let current;
  let prev;
  let next;

  // select elements needed for thne slider
  const slides = sliderEl.querySelector('.slides');
  const prevButton = sliderEl.querySelector('.goToPrev');
  const nextButton = sliderEl.querySelector('.goToNext');

  function startSlider() {
    current = sliderEl.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild
  }

  function applyClasses(params) {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      // make an array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    }

    applyClasses();
  }

  function handleArrowDirection(e) {
    if (e.key === 'ArrowLeft') return move('back');
    if (e.key === 'ArrowRight') return move();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // event listeners
  prevButton.addEventListener('click', () => move('back'))
  nextButton.addEventListener('click', move)
  slides.addEventListener('keyup', handleArrowDirection)
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
