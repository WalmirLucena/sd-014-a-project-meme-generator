const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function showMemeText() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', showMemeText);

const uploadedImage = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

// Inspiração para .files[0] : https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript

function setImage() {
  memeImage.src = URL.createObjectURL(uploadedImage.files[0]);
}

const uploadBtn = document.querySelector('#upload-btn');

uploadBtn.addEventListener('click', setImage);

const container = document.querySelector('#meme-image-container');
const borderContainer = document.querySelector('#border-change');

function changeBorder(event) {
  const border = event.target.id;
  if (border === 'fire') {
    container.style.border = '3px dashed red';
  } else if (border === 'water') {
    container.style.border = '5px double blue';
  } else if (border === 'earth') {
    container.style.border = '6px groove green';
  }
}

borderContainer.addEventListener('click', changeBorder);

const preloadImages = document.querySelector('#preload-image');

function setPreload(event) {
  memeImage.src = event.target.src;
}

preloadImages.addEventListener('click', setPreload);