const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

function updateMemeText(event) {
  memeText.innerText = event.target.value;
}

// Inspiração: https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
function updateMemeImage(event) {
  if (event.target.files && event.target.files[0]) {
    const imageURL = URL.createObjectURL(event.target.files[0]);
    memeImage.src = imageURL;
  }
}

inputText.addEventListener('keyup', updateMemeText);
inputImage.addEventListener('change', updateMemeImage);
