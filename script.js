const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('input', function() {
  memeText.innerText = textInput.value;
});

const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
memeInsert.addEventListener('change', function(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

const addBorda = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
fireButton.addEventListener('click', function() {
  addBorda.style.border = '3px dashed red';
});

const waterButton = document.querySelector('#water');
waterButton.addEventListener('click', function() {
  addBorda.style.border = '5px double blue';
});

const earthButton = document.querySelector('#earth');
earthButton.addEventListener('click', function() {
  addBorda.style.border = '6px groove green';
});
