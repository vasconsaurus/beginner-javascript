function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // select the elements we need
  // we are selecting them inside of the function so the gallerys won't clash with each other
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('opening modal..');
    // check if modal is open
    if(modal.matches('.open')) {
      console.info('modal is open');
      return; // stop function from running
    }
    modal.classList.add('open');

    // event listeners to be bound when we open the modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // we remove these event listeners so they are not running on things that are not showing on the page
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
  }

  function handleClickOutside(e) {
    // we are listening for the modal, we are checking if the user clicked on what we are listening for, the modal div, not the modalInner
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPreviousImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPreviousImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if(!el) {
      console.info('no image to show');
      return;
    }
    // update modal with info
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // our event listeners!

  images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));

  // loop over each image
  images.forEach(image => image.addEventListener('keyup', e => {
    // attach an eventListener for each
    if(e.key === 'Enter') {
      // if its enter, show that image
      showImage(e.currentTarget);
    }
  }));

  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
