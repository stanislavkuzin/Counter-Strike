'use strict'

let audioMenu = new Audio('./aud/menutheme.mp3');
let audioHover = new Audio('./aud/zvukhover.mp3');
let clickButton = new Audio('./aud/click.mp3');
const body = document.body;
const imgFon = document.getElementById('imgfon');
const textFon = document.getElementById('textfon');
const box = document.getElementById('box');
imgFon.style.opacity = '1';

bgImage();

function bgImage() {
  const img1 = "./img/gif1.gif";
  const img2 = "./img/gif2.gif";
  const img3 = "./img/gif3.gif";

  const arr = [img1, img2, img3];
  imgFon.src="./img/gif1.gif";

  let index = 1;
  setInterval(function() {
    imgFon.src = arr[index];
    index += 1;
    if(index === arr.length) {
      index = 0;
    }
  }, 5500);
};

const menu = (event) => {
  if ( event.key !== 'Enter') {
    return;
  } else {
    audioMenu.play();
    audioMenu.loop = true;
    audioMenu.volume = '0.2';
    textFon.style.display = 'none';
    let timeId = setInterval(function() {
      imgFon.style.opacity = imgFon.style.opacity - 0.05;
    }, 50);
    setTimeout(function() {clearInterval(timeId);
      imgFon.style.display = 'none'}, 1000);
  };
  body.removeEventListener('keydown', menu);
}

const hover = (event) => {
  if (event.target.tagName === 'DIV'){
    audioHover.play();
  }  
}

const click = (event) => {
  console.log(event)
  if (event.target.tagName === 'DIV'){
    clickButton.volume = '0.7';
    clickButton.play();
  }
}

body.addEventListener('keydown', menu);
box.addEventListener('mouseover', hover);
box.addEventListener('click', click);

////

let saveGun = new Audio('./aud/gundraw.mp3');
let diglHit = new Audio('./aud/diglhit.mp3');
let m4a1Hit = new Audio('./aud/m4a1hit.mp3');
let ak47Hit = new Audio('./aud/ak47hit.mp3');
let gogogo = new Audio('./aud/gogogo.mp3');
let death = new Audio('./aud/death.mp3');

let newGame = document.getElementById('newgame');
console.log('newGame')

const level1 = document.getElementById('level1');
const gun = document.getElementById('gun');

const openNewGame = () => {
  box.style.display = 'none';
  level1.style.display = 'block';
  audioMenu.pause();
  gogogo.play();
}

const digl = "./img/digl.png";
const m4a1 = "./img/m4a1.png";
const ak47 = "./img/ak471.png";


const changeGun = (event) => {
  switch(event.code) {
    case 'Digit1':
      gun.src = digl;
      saveGun.play();
      break;
  
    case 'Digit2':
      gun.src = m4a1;
      saveGun.play();
      break;

    case 'Digit3':  
      gun.src = ak47;
      saveGun.play();
      break;
  }
}

let bot1 = document.getElementById('bot1');

const hit = () => {
  m4a1Hit.play();
  bot1.style.left = '20%';
}

body.addEventListener('keydown', changeGun)

const aim = (event) => {
  gun.style.marginLeft = `${event.x}px`;
  if (event.x > 750) {
    gun.style.transform = 'scaleX(-1)';
    gun.style.marginLeft = `${event.x - 600}px`;
  } else {
    gun.style.transform = 'scaleX(1)';
  }
}

body.addEventListener('mousemove', aim);
newGame.addEventListener('click', openNewGame);


const live = document.getElementById('loadbot');
live.style.width = '100%';
let hp = document.getElementById('bottext');

const huck = () => {
  m4a1Hit.play();
  let count = parseInt(live.style.width);
  count -= Math.floor(Math.random() * 8);
  live.style.width = `${count}%`;

  if ( count <= 0 ) {
    hp.textContent = 'мертв';
    live.style.width = '100%'; 
    live.style.backgroundColor = 'rgb(195, 194, 194)';
    death.play();
    bot1.removeEventListener('click', huck)
    bot1.remove();
  } else {
    hp.textContent = `${count}%`;
  }
}
bot1.addEventListener('click', huck);
