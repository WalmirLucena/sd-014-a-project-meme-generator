const inputText = document.getElementById('text-input')
inputText.addEventListener('input', function () {
  const memeText = document.getElementById('meme-text')
  const container = document.getElementById('meme-image-container')
  memeText.innerText = inputText.value
})

// fazendo upload da foto para pagina

// https://www.youtube.com/watch?v=ZbbwP3Yz2dg
const upload = document.getElementById('meme-insert')
const memeImg = document.getElementById('meme-image')
upload.addEventListener('change', function() {
  let reader = new FileReader();
  reader.onload = function(){
    memeImg.src = reader.result;
  }
  reader.readAsDataURL(upload.files[0])
})