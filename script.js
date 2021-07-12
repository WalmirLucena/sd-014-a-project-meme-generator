// /////////////////////////////////////////////////////
// BLOCO 05 - DIA 7 - (BÔNUS) PROJETO - MEME GENERATOR
// TIAGO H. S. SATHLER - TURMA 14 - TRIBO A
// 12/07/21
// /////////////////////////////////////////////////////

function addPicture(element) {
  const figureElement = document.querySelector("#meme-image");
  const file = URL.createObjectURL(element.target.files[0]);
  console.log(file);
  figureElement.src = file; 
}

function addText(element) {
  const figureCaptionElement = document.querySelector("#meme-text");
  const text = element.target.value;
  console.log(text);
  if (text.length <= 60) {
    figureCaptionElement.innerText = text;
  } else {
    window.alert("Máximo de 60 caracteres")
  }
}

function initiate() {
  document.querySelector("#text-input").addEventListener('input', addText);
  document.querySelector("#meme-insert").addEventListener('change', addPicture)
}

window.onload = initiate ;
