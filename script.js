


let inputText = document.getElementById('text-input');
memeText = document.getElementById('meme-text');
inputText.addEventListener('input', function(){
    let texto= inputText.value;
    memeText.innerText= texto;
})

let inserirMeme = document.getElementById('meme-insert');
let imagem = document.getElementById('meme-image');
let inputimg = document.getElementById('meme-insert');

inputimg.addEventListener('click',function mudaimg(x) {
imagem.src = URL.createObjectURL(x.target.files[0])
imagem.onload = function() {
    URL.revokeObjectURL(imagem.src)
}
})

let container = document.querySelector("#meme-image-container")

let fire = document.getElementById('fire');
fire.addEventListener('click', function(){
    container.style.border= '3px dashed red'
})

let water = document.getElementById('water');
water.addEventListener('click', function(){
    container.style.border= '5px double blue'
})

let earth = document.getElementById('earth');
earth.addEventListener('click', function(){
    container.style.border= '6px groove rgb(0, 128, 0)'
})

let meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', function(){
 imagem.src= meme1.src
})

let meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', function(){
 imagem.src= meme2.src
})

let meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', function(){
 imagem.src= meme3.src
})

let meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', function(){
 imagem.src= meme4.src
})