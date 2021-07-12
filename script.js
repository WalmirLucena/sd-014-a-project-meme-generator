const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const borderButtons = document.getElementById('border-buttons');

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

function changeBorder(event) {
  const container = memeImage.parentElement;
  const borderType = event.target.id;
  container.className = borderType;
}

inputText.addEventListener('keyup', updateMemeText);
inputImage.addEventListener('change', updateMemeImage);
borderButtons.addEventListener('click', changeBorder);
