const memeText = document.getElementById("meme-text");
const getInput = document.getElementById("text-input");

getInput.addEventListener('keyup', function (event) {
  memeText.innerText = getInput.value;
})
