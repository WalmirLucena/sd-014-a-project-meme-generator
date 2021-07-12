const input = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const imgContainer = document.getElementById('meme-image');
const textInputContainer = document.getElementById('meme-text');
const imgInput = document.getElementById('meme-insert');

function memeText() {
  textInputContainer.innerText = input.value;
  if (input.value.length === 0) {
    input.value = "";
  }
}

function addImg() {
  const reader = new FileReader();
  const file = imgInput.files[0]
  if (file) {
	  reader.readAsDataURL(file);
	}
  reader.addEventListener('load', teste) 
  function teste() {
	  imgContainer.src = reader.result;
	}
}

imgInput.addEventListener('change', addImg);
input.addEventListener('keyup', memeText);
