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
  containerMeme.className = 'fire'
});

btnWater.addEventListener('click', () => {
  containerMeme.className = 'water'
});

btnEarth.addEventListener('click', () => {
  containerMeme.className = 'earth'
});
