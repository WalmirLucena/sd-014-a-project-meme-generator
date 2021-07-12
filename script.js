const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('keyup', () => { // Loads text
  memeText.innerText = textInput.value;
});

memeInsert.addEventListener('change', (event) => { // Loads image
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
});
