const memeText = document.getElementById('meme-text');
const memeInput = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const imgMeme1 = document.getElementById('meme-1')
const imgMeme2 = document.getElementById('meme-2')
const imgMeme3 = document.getElementById('meme-3')
const imgMeme4 = document.getElementById('meme-4')

function textoMeme() {
  memeText.innerText = memeInput.value;
}

// https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
      let img = document.querySelector('img');
      img.onload = () => {
        URL.revokeObjectURL(img.src);  // no longer needed, free memory
      };
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

function escMeme1() {
  let img = document.querySelector('img');
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };
  img.src = 'imgs/meme1.png'
}

function escMeme2() {
  let img = document.querySelector('img');
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };
  img.src = 'imgs/meme2.png'
}

function escMeme3() {
  let img = document.querySelector('img');
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };
  img.src = 'imgs/meme3.png'
}

function escMeme4() {
  let img = document.querySelector('img');
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };
  img.src = 'imgs/meme4.png'
}

memeInput.addEventListener('keyup', textoMeme);
fireButton.addEventListener('click', fire);
waterButton.addEventListener('click', water);
earthButton.addEventListener('click', earth);
imgMeme1.addEventListener('click', escMeme1);
imgMeme2.addEventListener('click', escMeme2);
imgMeme3.addEventListener('click', escMeme3);
imgMeme4.addEventListener('click', escMeme4);