// show text on the container
const textInput = document.querySelector('#text-input');

function showText() {
  const p = document.querySelector('#meme-text');
  p.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', showText);
