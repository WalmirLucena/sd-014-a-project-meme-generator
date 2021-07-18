const memeText = document.getElementById("meme-text");
const getInput = document.getElementById("text-input");
const getImageContainer = document.getElementById('meme-image');
const memeContainer = document.getElementById("meme-image-container")

//Requisito 1 
getInput.addEventListener('keyup', function (event) {
  memeText.innerHTML = getInput.value;
})

//Requisito 2
// URL.createObjectURL() - cria uma url a partir de um arquivo
function uploadImage() {
  const getImage = document.getElementById("meme-insert");
  getImage.addEventListener("change", function (event) {

    getImageContainer.src = URL.createObjectURL(event.target.files[0]);
  })
}
uploadImage();

const getButtons = document.getElementById("buttons");

getButtons.addEventListener('click', function name(event) {
  const buttonId = event.target.id;
  if (buttonId === 'fire') {
    memeContainer.style.border = '3px dashed red';
  } else if (buttonId === 'water') {
    memeContainer.style.border = '5px double blue';
  } else if (buttonId === 'earth') {
    memeContainer.style.border = '6px groove green';
  }


})

const getImageSaved = document.getElementById('image-saved');
getImageSaved.addEventListener('click', function name(event) {
  getImageContainer.src = event.target.src;

})
