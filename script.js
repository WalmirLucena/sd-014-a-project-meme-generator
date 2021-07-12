const memeText = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const btnInsert = document.getElementById('meme-insert');
// const imageMeme = document.getElementById('meme-image');

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
