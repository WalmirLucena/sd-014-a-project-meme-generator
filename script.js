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

function addImage(event) {
  let target = event.target;
  let files = target.files;

  if (FileReader && files && files.length) {
    let fr = new FileReader();
    fr.onload = function() {
      image.src = fr.result;
    }
    fr.readAsDataURL(files[0]);
  }
}

textInput.addEventListener('input', addText);
fileInput.addEventListener('change', addImage);