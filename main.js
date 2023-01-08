'use strict'

const body = document.body;
const imgFon = document.getElementById('imgfon');
const textFon = document.getElementById('textfon');
const box = document.getElementById('box');
const exit = document.getElementById('exit');
imgFon.style.opacity = '1';

const offTextMenu = (event) => {
  event.preventDefault();
}

//body.addEventListener('contextmenu', offTextMenu);


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
    audio.audioMenu.play();
    audio.audioMenu.loop = true;
    audio.audioMenu.volume = '0.1';
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
    audio.audioHover.play();
  }  
}

const click = (event) => {
  if (event.target.tagName === 'DIV'){
    audio.clickButton.volume = '0.7';
    audio.clickButton.play();
  }
}

body.addEventListener('keydown', menu);
box.addEventListener('mouseover', hover);
box.addEventListener('click', click);


let newGame = document.getElementById('newgame');

const exitGame = () => {
  audio.audioMenu.pause();
  textFon.style.display = 'flex';
  imgFon.style.opacity = '1';
  imgFon.style.display = 'block';
  body.addEventListener('keydown', menu);
  body.removeEventListener('keydown', closeMap);
}

exit.addEventListener('click', exitGame); // Exit Button

// MUTE LISTENER / AUDIO CONTCOL
muteIcon.addEventListener('click', mute)