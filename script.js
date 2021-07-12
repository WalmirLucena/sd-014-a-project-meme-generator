const texto = document.querySelector('#meme-text');
const input = document.querySelector('#text-input');
// Coloca texto na tela.
input.addEventListener('input', () => {
  texto.innerText = input.value;
});
// Add imagem do meme:
const memeImage = document.querySelector("#meme-image");
let pathImage = '/imagens/eu.jpg';
const buttonCarregaImagem = document.getElementById('meme-insert');
buttonCarregaImagem.addEventListener('click', () => {
  memeImage.src = pathImage;
});
const borda = document.querySelector('#meme-image-container').style;
// Borda vermelha:
const buttonFire = document.querySelector('#fire');
buttonFire.addEventListener('click', () => {
  borda.border = '3px dashed red';
});
// Borda azul:
const buttonWater = document.querySelector('#water');
buttonWater.addEventListener('click', () => {
  borda.border = '5px double blue';
});
// Borda verde:
const buttonEarth = document.querySelector('#earth');
buttonEarth.addEventListener('click', () => {
  borda.border = '6px groove green';
});
