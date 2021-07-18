
const memeText = document.getElementById("meme-text");
const getInput = document.getElementById("text-input");
const getImageContainer = document.getElementById('meme-image');

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