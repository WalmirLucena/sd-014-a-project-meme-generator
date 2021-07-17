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

