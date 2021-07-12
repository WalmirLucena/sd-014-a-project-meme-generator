// show text on the container
const textInput = document.querySelector('#text-input');

function showText() {
  const p = document.querySelector('#meme-text');
  p.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', showText);

// display selected image
const img = document.querySelector('#meme-image');
const imgInput = document.querySelector('#meme-insert');

function dispayImage(e) {
  img.src = URL.createObjectURL(e.target.files[0]);
}

imgInput.addEventListener('change', dispayImage);
