const textIpt = document.getElementById('text-input');
const par = document.getElementById('meme-text');
const file = document.getElementById('meme-insert');
const img = document.getElementsByTagName('img')[0];

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
