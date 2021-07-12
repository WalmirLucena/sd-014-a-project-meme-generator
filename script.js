const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function showMemeText() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', showMemeText);
