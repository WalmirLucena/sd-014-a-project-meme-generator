const myInput = document.getElementById('text-input');
const myMemeText = document.getElementById('meme-text');
const myMemePic = document.getElementById('meme-image');
const myFile = document.getElementById('userimg');
const myPics = document.getElementById('pre');
const myCont = document.getElementById('meme-image-container');

const btFire = document.getElementById('fire');
const btWater = document.getElementById('water');
const btEarth = document.getElementById('earth');

function changeText() {
  myMemeText.innerText = myInput.value;
}
myInput.addEventListener('change', changeText);

function setFile(){


}
myFile.addEventListener('change', setFile);

function selectPrePic(event){
  let pic = event.target.getAttribute('src');
  myMemePic.style.backgroundImage = 'url('+ pic + ')';
}
myPics.addEventListener('click', selectPrePic);


function setFire(){
 myMemePic.style.borderWidth = '3px';
 myMemePic.style.borderStyle = 'dashed';
 myMemePic.style.borderColor = 'rgb(255, 0, 0)';

}
btFire.addEventListener('click', setFire);

function setWater(){
  myMemePic.style.borderWidth = '3px';
  myMemePic.style.borderStyle = 'double';
  myMemePic.style.borderColor = 'rgb(239, 239, 239)';
}
btWater.addEventListener('click', setWater);

function setEarth(){
  myMemePic.style.borderWidth = '3px';
  myMemePic.style.borderStyle = 'groove';
  myMemePic.style.borderColor = 'rgb(0, 128, 0)';
}
btEarth.addEventListener('click', setEarth);

