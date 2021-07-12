const inputText = document.getElementById('text-input');

inputText.addEventListener('keyup', () => {
  const text = document.getElementById('meme-text');
  text.innerHTML = inputText.value;
});

const memeImage = document.getElementById('meme-image');
const chooseFile = document.getElementById('meme-insert');

chooseFile.addEventListener('change', (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});
