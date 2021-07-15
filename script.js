const inputText = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const fileUpload = document.querySelector('#meme-insert');
const imgThumb = document.querySelectorAll('.img-thumbnail');

function inputChange() {
  memeText.innerText = inputText.value;
}

function setMeme() {
  if (fileUpload.files[0]) {
    memeImage.src = URL.createObjectURL(fileUpload.files[0]);
    return;
  }
  memeImage.src = imgThumb[0].src;
}

function styleContainer(width = '1px', style = 'solid', color = 'rgb(0, 0, 0)') {
  memeContainer.style.border = `${width} ${style} ${color}`;
}

imgThumb.forEach((e) => {
  e.addEventListener('click', (el) => {
    memeImage.src = el.target.src;
  });
});

inputChange();
styleContainer();
setMeme();
