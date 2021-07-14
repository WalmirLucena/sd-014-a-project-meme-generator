// show text on the container
const textInput = document.querySelector('#text-input');

function showText() {
  const p = document.querySelector('#meme-text');
  p.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', showText);

// display selected image
const img = document.querySelector('#meme-image');
const imgInput = document.querySelector('#meme-insert');

function dispayImage(e) {
  img.src = URL.createObjectURL(e.target.files[0]);
}

imgInput.addEventListener('change', dispayImage);

// change border
const container = document.querySelector('#meme-image-container');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

function changeToRed() {
  container.style.border = '3px dashed red';
}

buttonFire.addEventListener('click', changeToRed);

function changeToBlue() {
  container.style.border = '5px double blue';
}

buttonWater.addEventListener('click', changeToBlue);

function changeToGreen() {
  container.style.border = '6px groove green';
}

buttonEarth.addEventListener('click', changeToGreen);

// select saved images
const savedImagesContainer = document.querySelector('#meme-saved-images');

function changeSavedImages(e) {
  const event = e.target;
  const savedSrc = event.src;

  if (savedSrc) {
    img.src = savedSrc;
  }
}
savedImagesContainer.addEventListener('click', changeSavedImages);
