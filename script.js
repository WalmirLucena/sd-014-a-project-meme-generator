const inputText = document.getElementById('text-input');

inputText.addEventListener('keyup', () => {
  const text = document.getElementById('meme-text');
  text.innerHTML = inputText.value;
});

const memeImage = document.getElementById('meme-image');
const chooseFile = document.getElementById('meme-insert');

chooseFile.addEventListener('change', (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});

const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const containerMeme = document.getElementById('meme-image-container');

btnFire.addEventListener('click', () => {
  containerMeme.className = 'fire';
});

btnWater.addEventListener('click', () => {
  containerMeme.className = 'water';
});

btnEarth.addEventListener('click', () => {
  containerMeme.className = 'earth';
});

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

meme1.addEventListener('click', () => {
  memeImage.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  memeImage.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  memeImage.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  memeImage.src = 'imgs/meme4.png';
});
