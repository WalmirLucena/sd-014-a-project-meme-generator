const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image-container');

function updateMemeText(event) {
  memeText.innerText = event.target.value;
}

inputText.addEventListener('keyup', updateMemeText)