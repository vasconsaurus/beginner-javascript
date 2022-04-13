// 1. select the elements on the page: canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); //ctx = context, canvas can be 3D

const shakebutton = document.querySelector('.shake');

const MOVE_AMOUNT = 40;

// 2. setup our canvas for drawing

// const width  = canvas.width;
// const height = canvas.height;
// make a variable called heigth and width from same properties on our canvas
const { width, height } = canvas

// create random x and y on canvas
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); //start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// 3. write a draw function
function draw({ key }) { // ({ key }) instead of (options)
  console.log(key);      // (key) instead of , (options.key) : object destructuring

  // increment hue
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// 4. write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); //e = event
    draw({ key: e.key });
    console.log(e.key)
    console.log('handling')
  }
}

// 5. clear -> shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height)
  canvas.addEventListener('animationend', function() {
    canvas.classList.remove('shake')
  }, { once: true }) // removes listener when animation is done
}

// 6. listen for arrow keys
window.addEventListener('keydown', handleKey)
shakebutton.addEventListener('click', clearCanvas)
