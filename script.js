function textRender() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', () => {
    const textContainer = document.getElementById('meme-text');
    textContainer.innerText = inputText.value;
  });
}
textRender();

function renderImage() {
  const imageInput = document.getElementById('meme-insert');
  imageInput.addEventListener('change', (event) => {
    const imageContainer = document.getElementById('meme-image');
    imageContainer.src = URL.createObjectURL(event.target.files[0]);
  })
}
renderImage();