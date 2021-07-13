const objEle = {
  textInput: document.querySelector('#text-input'),
  textMeme: document.querySelector('#meme-text'),
  imagemUpload: document.querySelector('#meme-insert'),
  imagemLoad: document.querySelector('#meme-image'),
  fire: document.querySelector('#fire'),
  water: document.querySelector('#water'),
  earth: document.querySelector('#earth'),
  bordaImagem: document.querySelector('#meme-image-container'),
};

const objFun = {
  pegaTexto: function pegaTExto() {
    objEle.textInput.addEventListener('input', () => {
      objEle.textMeme.innerText = objEle.textInput.value;
    });
  },
  leia: function leImagem() {
    objEle.imagemUpload.addEventListener('change', (event) => {
      objEle.imagemLoad.src = URL.createObjectURL(event.target.files[0]);
    });
  }, // Referencias <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this | https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader |https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977 | https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/>
};

objEle.fire.addEventListener('click', () => {
  
  objEle.bordaImagem.style.setProperty('border', '3px dashed red');
});
objEle.water.addEventListener('click', () => {
  objEle.bordaImagem.style.setProperty('border', '5px double blue');
});
objEle.earth.addEventListener('click', () => {
  objEle.bordaImagem.style.setProperty('border', '6px groove green');
});

window.onload = () => {
  objFun.pegaTexto();
  objFun.leia();
};
