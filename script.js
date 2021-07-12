const input = document.getElementById('text-input');
const imgInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const imgContainer = document.getElementById('meme-image');
const textInputContainer = document.getElementById('meme-text');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const btnFire = document.getElementById('fire');

function memeText() {
  textInputContainer.innerText = input.value;
  if (input.value.length === 0) {
    input.value = "";
  }
}

function addImg() {
  const reader = new FileReader();
  const file = imgInput.files[0]
  if (file) {
	  reader.readAsDataURL(file);
	}
  reader.addEventListener('load', teste) 
  function teste() {
	  imgContainer.src = reader.result;
	}
}

function greenBorder() {
  container.style.border = '';
  container.style.border = '6px groove green';
}

function redBorder() {
  container.style.border = '';
  container.style.border = '3px dashed red';
}

function blueBorder() {
  container.style.border = '';
  container.style.border = '5px double blue'
}


imgInput.addEventListener('change', addImg);
input.addEventListener('keyup', memeText);
btnEarth.addEventListener('click', greenBorder);
btnFire.addEventListener('click', redBorder);
btnWater.addEventListener('click', blueBorder);