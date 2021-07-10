const textContainer = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');

function textRender() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', () => {
    textContainer.innerText = inputText.value;
  });
}
textRender();

function renderImage() {
  const imageInput = document.getElementById('meme-insert');
  function setImage(target) {
    
    imageContainer.src = URL.createObjectURL(target.files[0]);
  }
  imageInput.addEventListener('change', (event) => {  
    setImage(event.target);
  })
}
renderImage();