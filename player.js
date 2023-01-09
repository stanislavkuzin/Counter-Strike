'use strict';

let arrWeapon = ["./img/digl.png", "./img/m4a1.png", "./img/ak471.png", "./img/diglmenu.png", "./img/m4a1menu.png", "./img/ak47menu.png"];
let colWeapon;
let timerId;
let countLineBlue;
let textEnd = document.getElementById('textend');
let endGame = document.getElementById('endgame');

class Player {
  constructor(weapon) {
    this.player = document.createElement('img');
    this.player.setAttribute('id', 'gun');
    this.player.setAttribute('src', weapon);
    this.live = new BotLiveBar();
    this.live.unit.classList.add('live-player');
    scene.append(this.live.unit);
    scene.append(this.player);
    body.addEventListener('mousemove', aim);
  }

  huckPlayer = () => {
    const damage = document.createElement('div');
    damage.classList.add('bgred');
    audio.headshot.play();
    scene.append(damage);
    setTimeout(() => damage.remove(), 100);
    randomHuckPlayer();
    this.damagePlayer();
  }

  damagePlayer = () => {
    this.live.liveLevel -= Math.floor(Math.random() * levelDifficultyPlayer);
      this.live.unit.setAttribute('value', this.live.liveLevel);
    if (this.live.liveLevel <= 0) {
      gun.style.display = 'none';
      audio.death.play();
      clearTimeout(timerId);
      scene.removeEventListener('click', hit);
      botOnLevel.offDamageBot();
      countMap = 0;
      gameOver();
    }
  }
}

function gameOver() {
  endgame.style.display = 'flex';
  textend.style.fontSize = '28px';
  textend.textContent = 'Game over! Backspace - new game. Esc - exit menu.';
  body.addEventListener('keydown', newsGame);
}

function newLevel() {
  endgame.style.display = 'flex';
  textend.style.fontSize = '35px';
  textend.textContent = 'Next level';
  setTimeout(() => endGame.style.display = 'none', 2000);
}

const newsGame = (event) => {
  if (event.key !== 'Backspace') {
    return;
  } else {
    level.delScene();
    openNewGame();
    endGame.style.display = 'none';
  }
}

const changeGun = (event) => {
  switch (event.code) {
    case 'Digit1':
      gun.src = arrWeapon[0];
      audio.saveGun.play();
      changeWeapon1();
      break;

    case 'Digit2':
      gun.src = arrWeapon[1];
      audio.saveGun.play();
      changeWeapon2();
      break;

    case 'Digit3':
      gun.src = arrWeapon[2];
      audio.saveGun.play();
      changeWeapon3();
      break;
  }
}

const changeWeapon1 = () => {
  digl1.style.borderColor = 'rgb(81, 255, 0)';
  m4a12.style.borderColor = 'black';
  ak473.style.borderColor = 'black';
}
const changeWeapon2 = () => {
  digl1.style.borderColor = 'black';
  m4a12.style.borderColor = 'rgb(81, 255, 0)';
  ak473.style.borderColor = 'black';
}
const changeWeapon3 = () => {
  digl1.style.borderColor = 'black';
  m4a12.style.borderColor = 'black';
  ak473.style.borderColor = 'rgb(81, 255, 0)';
}

body.addEventListener('keydown', changeGun);

const hit = (event) => {
  audio.ak47Hit.play();
  if (event.x < 750) {
    let fire = new Fire(event.x);
  } else {
    let fire = new Fire(event.x - 120);
  }
  setTimeout(() => document.querySelector('.fire').remove(), 100);
  gun.style.marginBottom = '-40px';
  setTimeout(() => gun.style.marginBottom = '0px', 100);
  data["data-count_shoots"] += 1;
  localStorage.setItem('data', JSON.stringify(data));
}


const aim = (event) => {
  gun.style.marginLeft = `${event.x}px`;
  if (event.x > 750) {
    gun.style.transform = 'scaleX(-1)';
    gun.style.marginLeft = `${event.x - 600}px`;
  } else {
    gun.style.transform = 'scaleX(1)';
  }
}

function randomHuckPlayer() {
  timerId = setTimeout(() => playerGame.huckPlayer(), (Math.floor(Math.random() * 8) * 1000));
}




