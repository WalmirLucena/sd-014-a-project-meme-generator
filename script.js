const input = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const inputContainer = document.getElementById('meme-text');

function memeText() {
  inputContainer.innerText = input.value;
}

input.addEventListener('keyup', memeText);
