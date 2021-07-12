const texto = document.querySelector('#meme-text');
console.log(texto);
const input = document.querySelector('#text-input');
console.log(input);
// Coloca texto na tela.
input.addEventListener('input', () => {
  texto.innerText = input.value;
});

function carregaImagem() {
  const memeImage = document.querySelector("#meme-image");
  memeImage.src = '/imagens/eu.jpg';
}

const buttonCarregaImagem = document.getElementById('meme-insert');
buttonCarregaImagem.addEventListener('change', carregaImagem);
