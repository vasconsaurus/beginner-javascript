// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new window.FaceDetector({ fastMode: true }); //without fastMode it doesn't work

const optionsInputs = document.querySelectorAll('.controls input[type="range"]')

const options = {
  SIZE: 10,
  SCALE: 1.35,
}

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value)
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption));

// write a function  that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();

  // size the canvases to be the same size as the video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // ask the browser when the next animation frame is
  // and tell it to run detect for us
  faces.forEach(drawFace)
  faces.forEach(censor)
  requestAnimationFrame(detect)
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect( left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height)

  // draw small face
  faceCtx.drawImage(
    // 5 source args
    video, // where the source comes from
    face.x,
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x,
    face.y,
    options.SIZE,
    options.SIZE
  )

  const width = face.width * options.SCALE
  const height = face.height * options.SCALE

  // resize the face to normal size again
  faceCtx.drawImage (
    faceCanvas,
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  )
}

populateVideo().then(detect);
