// adicionado o texto digitado ao container com a foto
const inputText = document.getElementById('text-input');
inputText.addEventListener('input', function () {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = inputText.value
});

// fazendo upload da foto para pagina

/*consultei esse video para resolver essa parte.
link do video: https://www.youtube.com/watch?v=ZbbwP3Yz2dg
*/
const upload = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
upload.addEventListener('change', function () {
  let reader = new FileReader();
  reader.onload = function () {
    memeImg.src = reader.result;
  }
  reader.readAsDataURL(upload.files[0]);
});

// evento para colocar borda estilizada na foto

 const fire = document.getElementById('fire');
 const water = document.getElementById('water');
 const earth = document.getElementById('earth');
 const memeContainer = document.getElementById('meme-image-container')

 fire.addEventListener('click', function(){
    memeContainer.style.border =  '3px dashed red';
    memeContainer.style.backgroundColor = 'red';
 })
 water.addEventListener('click', function(){
  memeContainer.style.border =  '5px double blue';
  memeContainer.style.backgroundColor = 'blue';
})
earth.addEventListener('click', function(){
  memeContainer.style.border =  '6px groove green';
  memeContainer.style.backgroundColor = 'green';
})