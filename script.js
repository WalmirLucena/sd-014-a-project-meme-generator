const createInput = document.createElement('input');
createInput.id = "text-input";
document.body.appendChild(createInput);
const getCreateInput = document.getElementById('text-input');
getCreateInput.type = "text";
getCreateInput.maxlength = '60';


const createSelectorFile = document.createElement('input');
createSelectorFile.id = "meme-insert";
createSelectorFile.type = 'file';
createSelectorFile.accept = 'image/*'
document.body.appendChild(createSelectorFile);


const divContainer = document.createElement('div');
divContainer.id = "meme-image-container";
document.body.appendChild(divContainer);
const getDivContainer = document.getElementById('meme-image-container');

const textInput = document.createElement('p');
textInput.id = "meme-text";
getDivContainer.appendChild(textInput);


getCreateInput.addEventListener('input',function(){
    const inputValue = getCreateInput.value;
    textInput.innerHTML = inputValue;
})

const createImage = document.createElement('img');
createImage.id = "meme-image";
createImage.alt = "imagem carregada";
getDivContainer.appendChild(createImage);

createSelectorFile.addEventListener('change',function(imagem){
    document.getElementById('meme-image').src = URL.createObjectURL(imagem.target.files[0]);
    
})

// Referencias <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this | https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader |https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977 | https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/>