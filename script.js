const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
memeInsert.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});

const addBorda = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
fireButton.addEventListener('click', function () {
  addBorda.style.border = '3px dashed red';
});

const waterButton = document.querySelector('#water');
waterButton.addEventListener('click', function () {
  addBorda.style.border = '5px double blue';
});

const earthButton = document.querySelector('#earth');
earthButton.addEventListener('click', function () {
  addBorda.style.border = '6px groove green';
});

const meme1 = document.querySelector('#meme-1');
meme1.addEventListener('click', function () {
  memeImage.src = meme1.src;
});
const meme2 = document.querySelector('#meme-2');
meme2.addEventListener('click', function () {
  memeImage.src = meme2.src;
});
const meme3 = document.querySelector('#meme-3');
meme3.addEventListener('click', function () {
  memeImage.src = meme3.src;
});
const meme4 = document.querySelector('#meme-4');
meme4.addEventListener('click', function () {
  memeImage.src = meme4.src;
});
