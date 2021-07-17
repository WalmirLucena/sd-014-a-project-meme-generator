const obj = {
  textInput: document.getElementById('text-input'),
  memeText: document.getElementById('meme-text'),
};

obj.textInput.addEventListener('keyup', () => {
  const textInput = document.getElementById('text-input').value;
  obj.memeText.innerText = textInput;
});
