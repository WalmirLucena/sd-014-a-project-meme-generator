const textInput = document.getElementById('text-input');
const fileInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('meme-image');

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

textInput.addEventListener('input', addText);
fileInput.addEventListener('change', addImage);