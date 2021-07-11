const texto = document.querySelector('#meme-text');
console.log(texto);
const input = document.querySelector('#text-input');
console.log(input);
// Coloca texto na tela.
input.addEventListener('input', () => {
  texto.innerText = input.value;
});
