const memeText = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const btnInsert = document.getElementById('meme-insert');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const allButtons = document.getElementById('buttons');
const bestMemes = document.getElementById('bestMemes');


function generateText() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', generateText);

function addImage(event) {
  const memeImage = document.getElementById('meme-image');
  const img = document.createElement('img');
  if (memeImage !== null) {
    container.removeChild(memeImage);
  }
  img.src = URL.createObjectURL(event.target.files[0]);
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
  img.id = 'meme-image';
  container.appendChild(img);
}

btnInsert.addEventListener('change', addImage);

function changeBorder(event) {
  switch (event.target) {
  case btnFire:
    container.style.border = '3px dashed red';
    break;
  case btnWater:
    container.style.border = '5px double blue';
    break;
  case btnEarth:
    container.style.border = '6px groove green';
    break;
  default:
  // do nothing;
  }
}

allButtons.addEventListener('click', changeBorder);

function selectBestMemes(event) {
  const memeImage = document.getElementById('meme-image');
  const img = document.createElement('img');
  if (memeImage !== null) {
    container.removeChild(memeImage);
  }
  img.src = event.target.src;
  img.id = 'meme-image';
  container.appendChild(img);
}
bestMemes.addEventListener('click', selectBestMemes);

window.onload = function () {
  for (let i = 1; i <= 4; i += 1) {
    const meme = document.createElement('img');
    meme.id = 'meme-' + [i];
    meme.src = 'imgs/meme' + [i] + '.png';
    bestMemes.appendChild(meme);
  }
};
