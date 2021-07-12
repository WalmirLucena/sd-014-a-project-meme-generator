// /////////////////////////////////////////////////////
// BLOCO 05 - DIA 7 - (BÔNUS) PROJETO - MEME GENERATOR
// TIAGO H. S. SATHLER - TURMA 14 - TRIBO A
// 12/07/21
// /////////////////////////////////////////////////////

function addText(element) {
  const figureCaptionElement = document.querySelector("#meme-text");
  const text = element.target.value;
  figureCaptionElement.innerText = text;
}

function initiate() {
  document.querySelector("#text-input").addEventListener('change', addText);
}

window.onload = initiate ;
