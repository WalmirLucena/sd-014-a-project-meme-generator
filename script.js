const obj = {
  textInput: document.getElementById('text-input'),
  memeText: document.getElementById('meme-text'),
  memeInsert: document.getElementById('meme-insert'),
  memeImageContainer: document.getElementById('meme-image-container'),
  memeImage: document.getElementById('meme-image'),
  buttonFire: document.getElementById('fire'),
  buttonWater: document.getElementById('water'),
  buttonEarth: document.getElementById('earth'),
};

obj.textInput.addEventListener('keyup', () => {
  const textInputValue = document.getElementById('text-input').value;
  obj.memeText.innerText = textInputValue;
});

obj.memeInsert.addEventListener('change', () => {
  const image = document.getElementById('meme-image');
  const memeInsertValue = document.getElementById('meme-insert').files[0];
  image.src = window.URL.createObjectURL(memeInsertValue);
  obj.memeImageContainer.appendChild(image);
});

obj.buttonFire.addEventListener('click', () => {
  obj.memeImageContainer.style.border = 'dashed 3px red';
});

obj.buttonWater.addEventListener('click', () => {
  obj.memeImageContainer.style.border = 'double 5px blue';
});

obj.buttonEarth.addEventListener('click', () => {
  obj.memeImageContainer.style.border = 'groove 6px green';
});
// Método createObjectURL: Pode ser encontrado em: https://stackoverflow.com/a/27165977
