const memeText = document.getElementById('meme-text');
const memeInput = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function textoMeme() {
  memeText.innerText = memeInput.value;
}

// https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});

function fire() {
  container.style.border = '3px dashed red';
}

function water() {
  container.style.border = '5px double blue';
}

function earth() {
  container.style.border = '6px groove green';
}

memeInput.addEventListener('keyup', textoMeme);
fireButton.addEventListener('click', fire);
waterButton.addEventListener('click', water);
earthButton.addEventListener('click', earth);
