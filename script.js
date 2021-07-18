
const memeText = document.getElementById("meme-text");
const getInput = document.getElementById("text-input");
const getImageContainer = document.getElementById('meme-image');
const memeContainer=document.getElementById("meme-image-container")

//Requisito 1 
getInput.addEventListener('keyup', function (event) {
  memeText.innerText = getInput.value;
})

//Requisito 2
// URL.createObjectURL() - cria uma url a partir de um arquivo
function uploadImage(){
  const getImage = document.getElementById("meme-insert");
  getImage.addEventListener("change", function(event){
  
    getImageContainer.src = URL.createObjectURL(event.target.files[0]);
  })
}
uploadImage();

function buttonFire(){
  const getFire = document.getElementById('fire');
  getFire.addEventListener("click", function(event){
    memeContainer.style.border = '3px dashed red';
  })
}
buttonFire();

function buttonWater(){
  const getFire = document.getElementById('water');
  getFire.addEventListener("click", function(event){
    memeContainer.style.border = '5px double blue';
  })
}
buttonWater();

function buttonEarth(){
  const getFire = document.getElementById('earth');
  getFire.addEventListener("click", function(event){
    memeContainer.style.border = '6px groove green';
  })
}
buttonEarth();