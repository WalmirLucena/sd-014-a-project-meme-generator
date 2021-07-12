const inputText = document.getElementById('text-input');

function insertText() {
  let text = document.getElementById('meme-text');
  text.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', insertText);