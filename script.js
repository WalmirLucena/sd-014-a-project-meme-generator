const textInput = document.getElementById('text-input');
const fileInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const suggestion1 = document.getElementById('meme-1');
const suggestion2 = document.getElementById('meme-2');
const suggestion3 = document.getElementById('meme-3');
const suggestion4 = document.getElementById('meme-4');

// Adiciona texto digitado a div dentro da imagem
function addText() {
  const newText = textInput.value;
  memeText.innerText = newText;
}

// Adiciona URL do arquivo informado por quem usa a aplicação ao atributo src da tag img
function addImage(event) {
  let selectedFile = event.target.files[0];

  let fr = new FileReader();
  fr.onload = function() {
    image.src = fr.result;
  }
  fr.readAsDataURL(selectedFile);
}

// Adiciona estilo da classe fire ao container
function addFireStyle() {
  container.style.border = '3px dashed red'
}

// Adiciona estilo da classe water ao container
function addWaterStyle() {
  container.style.border = '5px double blue'
}

// Adiciona estilo da classe earth ao container
function addEarthStyle() {
  container.style.border = '6px groove green'
}

function addFirstSuggestion() {
  image.src = suggestion1.src;
}

function addSecondSuggestion() {
  image.src = suggestion2.src;
}

function addThirdSuggestion() {
  image.src = suggestion3.src;
}

function addFourthSuggestion() {
  image.src = suggestion4.src;
}

textInput.addEventListener('input', addText);
fileInput.addEventListener('change', addImage);
btnFire.addEventListener('click', addFireStyle);
btnWater.addEventListener('click', addWaterStyle);
btnEarth.addEventListener('click', addEarthStyle);
suggestion1.addEventListener('click', addFirstSuggestion);
suggestion2.addEventListener('click', addSecondSuggestion);
suggestion3.addEventListener('click', addThirdSuggestion);
suggestion4.addEventListener('click', addFourthSuggestion);
