const textIpt = document.getElementById('text-input');
const par = document.getElementById('meme-text');
const file = document.getElementById('meme-insert');
const img = document.getElementsByTagName('img')[0];
const fire = document.getElementById('fire')
const water = document.getElementById('water')
const earth = document.getElementById('earth')
const cont = document.getElementById('meme-image-container')
const meme1 = document.getElementById('meme-1')
const meme2 = document.getElementById('meme-2')
const meme3 = document.getElementById('meme-3')
const meme4 = document.getElementById('meme-4')
const memeImg = document.getElementById('meme-image')

meme1.addEventListener('click',changeMeme)
meme2.addEventListener('click',changeMeme)
meme3.addEventListener('click',changeMeme)
meme4.addEventListener('click',changeMeme)

function changeMeme(event){
    memeImg.src = event.target.src
}

function generate(enter){
    if(enter.key !== 'F11'){
        par.innerText = textIpt.value
        
    }
}

textIpt.addEventListener('keyup', generate)
file.addEventListener('change',selectImage)

function selectImage(event){
    img.src = URL.createObjectURL(event.target.files[0])
    img.onload = function(){
        URL.revokeObjectURL(img.src)
    } // referência: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
}

fire.addEventListener('click', Fire)
water.addEventListener('click', Water)
earth.addEventListener('click', Earth)

function Fire(){
    cont.className = 'fire'
}function Water(){
    cont.className = 'water'
}function Earth(){
    cont.className = 'earth'
}