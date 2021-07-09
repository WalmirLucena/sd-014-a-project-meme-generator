function textRender() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', () => {
    const textContainer = document.getElementById('meme-text');
    textContainer.innerText = inputText.value;
  });
}
textRender();