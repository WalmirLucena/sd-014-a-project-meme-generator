const texto = document.querySelector('#meme-text');
const input = document.querySelector('#text-input');
const memeImage = document.querySelector('#meme-image');
// Coloca texto na tela.
input.addEventListener('input', () => {
  texto.innerText = input.value;
});
// Add imagem do meme:
const buttonCarregaImagem = document.getElementById('meme-insert');
buttonCarregaImagem.addEventListener('click', () => {
  memeImage.src = '/imgs/eu.jpg';
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
// Add meme da miniatura 1:
const memeUm = document.querySelector('#meme-1');
memeUm.addEventListener('click', () => {
  console.log('entrou');
  memeImage.src = '/imgs/meme1.png';
});
// Add meme da miniatura 2:
const memeDois = document.querySelector('#meme-2');
memeDois.addEventListener('click', () => {
  console.log('entrou');
  memeImage.src = '/imgs/meme2.png';
});
// Add meme da miniatura 1:
const memeTres = document.querySelector('#meme-3');
memeTres.addEventListener('click', () => {
  console.log('entrou');
  memeImage.src = '/imgs/meme3.png';
});
// Add meme da miniatura 1:
const memeQuatro = document.querySelector('#meme-4');
memeQuatro.addEventListener('click', () => {
  console.log('entrou');
  memeImage.src = '/imgs/meme4.png';
});
