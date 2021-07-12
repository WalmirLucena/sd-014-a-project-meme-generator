const memeText = document.getElementById('meme-text');
let container = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const btnInsert = document.getElementById('meme-insert');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const allButtons = document.getElementById('buttons');

function generateText() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', generateText);

function addImage() {
  const img = document.createElement('img');
  img.src = URL.createObjectURL(btnInsert.files[0]);
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
  img.id = 'meme-image';
  container.appendChild(img);
}

btnInsert.addEventListener('change', addImage);

function changeBorder (event) {
  switch (event.target) {
    case btnFire:
      container.style.border = '3px dashed red'
      break;
    case btnWater:
      container.style.border = '5px double blue'
      break;
    case btnEarth:
      container.style.border = '6px groove green'
      break;
  }

}

allButtons.addEventListener('click', changeBorder)