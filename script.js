const memeText = document.getElementById('meme-text');
const memeInput = document.getElementById('text-input');

function textoMeme(){
  memeText.innerText = memeInput.value;
}

memeInput.addEventListener('keyup', textoMeme);