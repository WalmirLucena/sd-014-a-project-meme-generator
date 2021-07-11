const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

memeInsert.addEventListener('change', () => {
  // Fonte: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  memeImage.onload = () => { URL.revokeObjectURL(memeImage.src); };
});

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});
