'use strict';

const body = document.body;
const imgFon = document.getElementById('imgfon');
const textFon = document.getElementById('textfon');
const box = document.getElementById('box');
const exit = document.getElementById('exit');
imgFon.style.opacity = '1';

bgImage();

function bgImage() {
  const img1 = "./img/gif1.gif";
  const img2 = "./img/gif2.gif";
  const img3 = "./img/gif3.gif";

  const arr = [img1, img2, img3];
  imgFon.src = "./img/gif1.gif";

  let index = 1;
  setInterval(function () {
    imgFon.src = arr[index];
    index += 1;
    if (index === arr.length) {
      index = 0;
    }
  }, 5500);
};

const menu = (event) => {
  if (event.key !== 'Enter') {
    return;
  } else {
    audio.audioMenu.play();
    audio.audioMenu.loop = true;
    audio.audioMenu.volume = '0.1';
    textFon.style.display = 'none';
    let timeId = setInterval(function () {
      imgFon.style.opacity = imgFon.style.opacity - 0.05;
    }, 50);
    setTimeout(function () {
      clearInterval(timeId);
      imgFon.style.display = 'none'
    }, 1000);
  };
  body.removeEventListener('keydown', menu);
}

const hover = (event) => {
  if (event.target.tagName === 'DIV') {
    audio.audioHover.play();
  }
}

const click = (event) => {
  if (event.target.tagName === 'DIV') {
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
  controlsdiv.style.display = 'none';
  body.addEventListener('keydown', menu);
  body.removeEventListener('keydown', closeMap);
}

exit.addEventListener('click', exitGame); // Exit Button

// MUTE LISTENER / AUDIO CONTCOL
muteIcon.addEventListener('click', mute)

// CONTROLS BUTTUNS
let controlBut = document.getElementsByClassName('controls')[0];
const controlsdiv = document.createElement('div');
controlBut.addEventListener('click', () => {showControlWindow(controlsdiv)})
controls(controlsdiv);
function controls(controls) {
  let buttons = [
    'Esc - exit of current game and return main menu',
   'BackSpace - move to the new game',
    'Enter - return main menu',
    '1 - choose a weapon deagle',
    '2 - choose a weapon m4a1',
    '3 - choose a weapon ak47'];
  for (let i = 0; i < buttons.length; i += 1) {
    let button = document.createElement('div');
    button.textContent = buttons[i];
    button.style.color = 'white';
    controls.append(button);
  }
  let closeButtun = document.createElement('div');
  closeButtun.innerHTML = '<span class="material-symbols-outlined">cancel</span>';
  closeButtun.style.position = 'absolute';
  closeButtun.style.right = '10px';
  closeButtun.style.top = '10px';
  closeButtun.addEventListener('click',() => {closeControlWindow(controls)})
  controls.append(closeButtun);

  controls.style.width = '400px';
  controls.style.color = 'white';
  controls.style.display = 'flex';
  controls.style.flexDirection = 'column';
  controls.style.display = 'none';
  controls.style.gap = '3%';
  controls.style.justifyContent = 'center';
  controls.style.alignItems = 'center';
  controls.style.height = '300px';
  controls.style.position = 'absolute';
  controls.style.left = 'calc("50% - 400px")';
  controls.style.top = 'calc(50% - 150px)';
  controls.style.background = 'black';
  controls.style.zIndex = '1000';
  controls.style.border = '2px solid white';
  controls.style.fontFamily = 'Arial';

  document.body.append(controls);

}

function closeControlWindow (block) {
  block.style.display = 'none';
}
function showControlWindow (block) {
  block.style.display = 'flex';
}