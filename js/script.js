const buttonBack = document.querySelector('.window_back');
const buttonForward = document.querySelector('.window_forward');
const firstPhoto = document.querySelector('.first_photo');
const styleFirstPhoto = getComputedStyle(firstPhoto);
const margFirstPhoto = getComputedStyle(firstPhoto).marginLeft;
const widthFirstPhoto = parseInt(styleFirstPhoto.width);

const blockCounter = document.querySelector('.counter');
let numCounter = 1;
count(numCounter);

const wrapper = document.querySelector('.wrapper');
const amountImg = wrapper.children.length;
count(numCounter, amountImg);

buttonBack.addEventListener('click', function(){
  let x = parseInt(styleFirstPhoto.marginLeft);
  if (x<0){
    if (x % parseInt(widthFirstPhoto) == 0){
    firstPhoto.style.marginLeft = `${parseInt(x)+widthFirstPhoto}px`;
    buttonForward.classList.remove("stop");
    numCounter--;
    count(numCounter, amountImg);
    }}
  else {
    buttonBack.classList.add("stop");
}})
buttonForward.addEventListener('click', function(){
  let x = parseInt(styleFirstPhoto.marginLeft);
  if (x>-(widthFirstPhoto*(amountImg-1))){
    if (parseInt(x) % parseInt(widthFirstPhoto) == 0){
    firstPhoto.style.marginLeft = `${parseInt(x)-widthFirstPhoto}px`;
    buttonBack.classList.remove("stop");
    numCounter++;
    count(numCounter, amountImg);
    }}
  else {
    buttonForward.classList.add("stop");
}})



const autoEnd = document.querySelector('.autoEnd');
autoEnd.addEventListener('click', function(){
  let x = parseInt(styleFirstPhoto.marginLeft);
    if (x % parseInt(widthFirstPhoto) == 0){
      while (x>-(widthFirstPhoto*(amountImg-1))){
        firstPhoto.style.marginLeft = `${parseInt(x)-widthFirstPhoto}px`;
      numCounter++;
      count(numCounter, amountImg);
      x = parseInt(firstPhoto.style.marginLeft);
      }
    }
});
const autoStart = document.querySelector('.autoStart');
autoStart.addEventListener('click', function(){
  let x = parseInt(styleFirstPhoto.marginLeft);
    if (x % parseInt(widthFirstPhoto) == 0){
      while (x<0){
        firstPhoto.style.marginLeft = `${parseInt(x)+widthFirstPhoto}px`;
      numCounter--;
      count(numCounter, amountImg);
      x = parseInt(firstPhoto.style.marginLeft);
      }
    }
});

function count(numCounter, amountImg){
  blockCounter.textContent = `${numCounter} / ${amountImg}`;
}
