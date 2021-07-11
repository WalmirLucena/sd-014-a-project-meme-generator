const textInput = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const buttonsContainer = document.getElementById('buttons-container');

memeInsert.addEventListener('change', () => {
  // Fonte: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  memeImage.onload = () => { URL.revokeObjectURL(memeImage.src); };
});

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});

buttonsContainer.addEventListener('click', (event) => {
  const button = event.target;
  if (button.tagName === 'BUTTON' && !button.classList.contains('active')) {
    const activeButton = buttonsContainer.querySelector('.active');
    if (activeButton) {
      activeButton.classList.toggle('active');
    }
    button.classList.toggle('active');
    memeContainer.className = button.id;
  }
});
