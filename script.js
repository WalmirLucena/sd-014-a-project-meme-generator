const textInput = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const buttonsContainer = document.getElementById('buttons-container');
const optionMemesContainer = document.getElementById('memes-container');

function activeSelection(element, activeElement, tag) {
  if (element.tagName === tag && !element.classList.contains('active')) {
    if (activeElement) { activeElement.classList.toggle('active'); }
    element.classList.toggle('active');
    return true;
  }
  return false;
}

memeInsert.addEventListener('change', () => {
  // Fonte: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  memeImage.onload = () => { URL.revokeObjectURL(memeImage.src); };
  const activeMemeOption = optionMemesContainer.querySelector('.active');
  if (activeMemeOption) { activeMemeOption.classList.toggle('active'); }
});

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
});

buttonsContainer.addEventListener('click', (event) => {
  const button = event.target;
  const active = buttonsContainer.querySelector('.active');
  if (activeSelection(button, active, 'BUTTON')) {
    memeContainer.className = button.id;
  }
});

optionMemesContainer.addEventListener('click', (event) => {
  const active = optionMemesContainer.querySelector('.active');
  const memeOption = event.target;
  if (activeSelection(memeOption, active, 'IMG')) {
    const memeSrc = memeOption.src;
    memeImage.src = memeSrc;
    memeImage.onload = () => { URL.revokeObjectURL(memeImage.src); };
  }
});
