const textContainer = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');
const range = document.getElementById('range-width');

function getCurrentPlace(element) {
  const { top, right, width, height } = element.getBoundingClientRect();
  return { pageX: right, pageY: top, width, height };
}

function getMaxRange() {
  const containerPlace = getCurrentPlace(imageContainer);
  const { pageX, pageY, width } = getCurrentPlace(textContainer);
  const maxWidth = containerPlace.pageX - pageX + width;
  const maxHeight = containerPlace.pageY + containerPlace.height - pageY;
  return { maxWidth, maxHeight };
}

function changeTextMax() {
  const { maxHeight } = getMaxRange();
  textContainer.style.maxWidth = `${range.value}px`;
  textContainer.style.maxHeight = `${maxHeight}px`;
}

function updateRangeMax() {
  const { maxWidth } = getMaxRange();
  range.max = maxWidth;
  range.value = maxWidth;
  changeTextMax();
}
updateRangeMax();

function textRender() {
  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', () => {
    textContainer.innerText = inputText.value;
  });
}
textRender();

function getDefaultTextPlace() {
  const { pageY, pageX, width } = getCurrentPlace(imageContainer);
  return { pageX: pageX - width, pageY };
}

function moveText(event) {
  let { pageX, pageY } = event;
  pageX += 5;
  pageY += 5;
  textContainer.style.left = `calc(${pageX}px - 7%)`; //  CSS main-content
  textContainer.style.top = `calc(${pageY}px - 50px)`;
}

function textMover() {
  imageContainer.addEventListener('mousemove', (event) => {
    moveText(event);
    updateRangeMax();
  });
  imageContainer.addEventListener('mouseover', (event) => {
    moveText(event);
  });
}
textMover();

function placeText() {
  window.scrollTo(0, 0); //  prevent bug in text
  const defaultTextPlace = getDefaultTextPlace();
  let currentPlace = defaultTextPlace;
  moveText(defaultTextPlace);
  imageContainer.addEventListener('mouseleave', () => {
    moveText(currentPlace);
    updateRangeMax();
  });
  imageContainer.addEventListener('click', (event) => {
    const { pageX, pageY } = event;
    currentPlace = { pageX, pageY };
  });
  imageContainer.addEventListener('dblclick', () => {
    currentPlace = defaultTextPlace;
    updateRangeMax();
  });
}
placeText();

function renderImage() {
  const imageInput = document.getElementById('meme-insert');
  imageInput.addEventListener('change', (event) => {
    imageContainer.src = URL.createObjectURL(event.target.files[0]);
    updateRangeMax();
    placeText();
  });
}
renderImage();

function removeOldBorder(borders) {
  const bordersArray = Object.values(borders);
  for (let i = 0; i < bordersArray.length; i += 1) {
    if (memeContainer.classList.contains(bordersArray[i])) {
      memeContainer.classList.remove(bordersArray[i]);
    }
  }
}

function changeBorder() {
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');
  const borders = {
    fire: 'fire-border',
    water: 'water-border',
    earth: 'earth-border',
  };
  function changeBorderStyle(event) {
    const { className } = event.target;
    removeOldBorder(borders);
    memeContainer.classList.add(borders[className]);
  }
  fire.addEventListener('click', changeBorderStyle);
  water.addEventListener('click', changeBorderStyle);
  earth.addEventListener('click', changeBorderStyle);
}
changeBorder();

function selectPreSelectedMeme() {
  const memeSelector = document.getElementById('meme-selector');
  memeSelector.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.classList.contains('meme')) return;
    const style = window.getComputedStyle(target);
    const image = style.backgroundImage.slice(4, -1).replace(/"/g, '');
    imageContainer.src = image;
    updateRangeMax();
    placeText();
  });
}
selectPreSelectedMeme();

function textRange() {
  range.addEventListener('mousemove', () => {
    changeTextMax();
  });
}
textRange();

function setTextRange() {
  const textSize = document.getElementById('text-size');
  const textWeight = document.getElementById('text-weight');
  function setTextSize() {
    const size = textSize.value;
    textContainer.style.fontSize = `${size}px`;
  }
  setTextSize();
  function setTextWeight() {
    const weight = textWeight.value;
    textContainer.style.fontWeight = weight;
  }
  setTextWeight();
  textSize.addEventListener('mousemove', () => {
    setTextSize();
  });
  textWeight.addEventListener('mousemove', () => {
    setTextWeight();
  });
}
setTextRange();

function textShadow() {
  const checkbox = document.getElementById('text-shadow');
  function shadow() {
    if (checkbox.checked === true) {
      textContainer.style.textShadow = '5px 5px 5px black';
    } else {
      textContainer.style.textShadow = '';
    }
  }
  shadow();
  checkbox.addEventListener('change', () => {
    shadow();
  });
}
textShadow();

function textColor() {
  const colorInput = document.getElementById('text-color');
  function colorText() {
    textContainer.style.color = colorInput.value;
  }
  colorText();
  colorInput.addEventListener('change', () => {
    colorText();
  });
}
textColor();

function setMinWidth(currentWidth) {
  const style = window.getComputedStyle(imageContainer);
  const minWidth = style.getPropertyValue('min-width');
  if (currentWidth < minWidth) {
    imageContainer.style.minWidth = `${currentWidth}px`;
    imageContainer.style.minHeight = '1px';
  } else {
    imageContainer.style.minWidth = `${minWidth}px`;
  }
}

function screenResize() {
  const main = document.querySelector('main');
  function setImageMaxWidth() {
    const { width } = main.getBoundingClientRect();
    imageContainer.style.maxWidth = `${width}px`;
  }
  setImageMaxWidth();
  window.addEventListener('resize', () => {
    setImageMaxWidth();
    setMinWidth();
    placeText();
  });
}
screenResize();
