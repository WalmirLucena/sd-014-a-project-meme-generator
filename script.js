const memeText = document.getElementById('meme-text');
const getInput = document.getElementById('text-input');
const getImageContainer = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');

getInput.addEventListener('keyup', function {
  memeText.innerHTML = getInput.value;
});

function uploadImage() {
  const getImage = document.getElementById('meme-insert');
  getImage.addEventListener('change', event => {

    getImageContainer.src = URL.createObjectURL(event.target.files[0]);
  });
}

uploadImage();
const getButtons = document.getElementById('buttons');

getButtons.addEventListener('click', event => {
  const buttonId = event.target.id;
  if (buttonId === 'fire') {
    memeContainer.style.border = '3px dashed red';
  } else if (buttonId === 'water') {
    memeContainer.style.border = '5px double blue';
  } else if (buttonId === 'earth') {
    memeContainer.style.border = '6px groove green';
  }
});

const getImageSaved = document.getElementById('image-saved');
getImageSaved.addEventListener('click', event => {
  getImageContainer.src = event.target.src;
});
