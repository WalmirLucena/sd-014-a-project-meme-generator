const textContainer = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');

function textRender() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', () => {
    textContainer.innerText = inputText.value;
  });
}
textRender();

function renderImage() {
  const imageInput = document.getElementById('meme-insert');
  imageInput.addEventListener('change', (event) => {  
    imageContainer.src = URL.createObjectURL(event.target.files[0]);
  })
}
renderImage();

function changeBorder() {
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  const borders = {
    fire: 'fire-border',
    water: 'water-border',
    earth: 'earth-border'
  };
  function removeOldBorder() {
    const bordersArray = Object.values(borders);
    for (const border of bordersArray) {
      if (memeContainer.classList.contains(border)) {
        memeContainer.classList.remove(border);
      }
    }
  }
  function changeBorderStyle(event) {
    const { className } = event.target;
    removeOldBorder();
    memeContainer.classList.add(borders[className]);
  }
  fire.addEventListener('click', changeBorderStyle);
  water.addEventListener('click', changeBorderStyle);
  earth.addEventListener('click', changeBorderStyle);
}
changeBorder();