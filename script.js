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

textInput.addEventListener('input', addText);