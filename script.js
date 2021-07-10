const myInput = document.getElementById('text-input');
const myMemeText = document.getElementById('meme-text');
const myMemePic = document.getElementById('meme-image');
const myFile = document.getElementById('meme-insert');
const myPics = document.getElementById('pre');
const myCont = document.getElementById('meme-image-container');
const btFire = document.getElementById('fire');
const btWater = document.getElementById('water');
const btEarth = document.getElementById('earth');

function changeText() {
  myMemeText.innerText = myInput.value;
}
myInput.addEventListener('keyup', changeText);

// https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
function setFile(event){
myMemePic.src = URL.createObjectURL(event.target.files[0]);
}
myFile.addEventListener('change', setFile);

function selectPrePic(event){
  myMemePic.src = event.target.src;
}
myPics.addEventListener('click', selectPrePic);

function setFire(){
  myCont.style.border = 'dashed 3px red';
}
btFire.addEventListener('click', setFire);

function setWater(){
  myCont.style.border = 'double 5px blue';
}
btWater.addEventListener('click', setWater);

function setEarth(){
  myCont.style.border = 'groove 6px green';
}
btEarth.addEventListener('click', setEarth);

