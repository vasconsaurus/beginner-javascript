function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  this.gallery = gallery;

  // select the elements we need
  // we are selecting them inside of the function so the gallerys won't clash with each other
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // bind our methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // our event listeners!

  this.images.forEach((image) =>
    image.addEventListener('click', (e) => this.showImage(e.currentTarget))
  );

  // loop over each image
  this.images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      // attach an eventListener for each
      if (e.key === 'Enter') {
        // if its enter, show that image
        this.showImage(e.currentTarget);
      }
    })
  );

  this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function () {
  console.info('opening modal..');
  // check if modal is open
  if (this.modal.matches('.open')) {
    console.info('modal is open');
    return; // stop function from running
  }
  this.modal.classList.add('open');

  // event listeners to be bound when we open the modal
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  // we remove these event listeners so they are not running on things that are not showing on the page
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function (e) {
  // we are listening for the modal, we are checking if the user clicked on what we are listening for, the modal div, not the modalInner
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === 'Escape') return this.closeModal();
  if (e.key === 'ArrowRight') return this.showNextImage();
  if (e.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('no image to show');
    return;
  }
  // update modal with info
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
