const objEle = {
  textInput: document.querySelector('#text-input'),
  textMeme: document.querySelector('#meme-text'),
  imagemUpload: document.querySelector('#meme-insert'),
  imagemLoad: document.querySelector('#meme-image'),
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

window.onload = () => {
  objFun.pegaTexto();
  objFun.leia();
};
