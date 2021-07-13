const objEle = {
  textInput: document.querySelector('#text-input'),
  textMeme: document.querySelector('#meme-text'),
};

const objFun = {
  pegaTexto: function pegaTExto() {
    objEle.textInput.addEventListener('input', () => {
      objEle.textMeme.innerText = objEle.textInput.value;
    });
  },
};

window.onload = () => {
  objFun.pegaTexto();
};
