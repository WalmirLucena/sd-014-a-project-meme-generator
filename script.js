const texto = document.querySelector('#meme-text');
const input = document.querySelector('#text-input');
const memeImage = document.querySelector('#meme-image');
// Coloca texto na tela.
input.addEventListener('input', () => {
  texto.innerText = input.value;
});
// Função para retirada do fakepath obtida em: https://stackoverflow.com/questions/20537696/remember-and-repopulate-file-input/20537822#20537822
function extractFilename(path) {
  if (path.substr(0, 12) == "C:\\fakepath\\")
    return path.substr(12); // modern browser
  var x;
  x = path.lastIndexOf('/');
  if (x >= 0) // Unix-based path
    return path.substr(x+1);
  x = path.lastIndexOf('\\');
  if (x >= 0) // Windows-based path
    return path.substr(x+1);
  return path; // just the filename
}
// Add imagem do meme:
const buttonCarregaImagem = document.getElementById('meme-insert');
buttonCarregaImagem.addEventListener('change', () => {
  memeImage.src = '/imgs/'+ extractFilename(buttonCarregaImagem.value);
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
