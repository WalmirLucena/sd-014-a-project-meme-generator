const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

textInput.addEventListener('input', function () {
  memeText.innerHTML = textInput.value;
});

memeInsert.addEventListener('change', function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});
