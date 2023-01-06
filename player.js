'use strict';

let arrWeapon = ["./img/digl.png","./img/m4a1.png","./img/ak471.png","./img/diglmenu.png","./img/m4a1menu.png","./img/ak47menu.png"]; 
let colWeapon;
let timerId;
let countLineBlue;

class Player {
    constructor(weapon) {
        this.player = document.createElement('img');
        this.player.setAttribute('id', 'gun');
        this.player.setAttribute('src', weapon);
        this.live = new LivePlayer();
        scene.append(this.live);
        scene.append(this.player);
        body.addEventListener('mousemove', aim);
    }
}

const changeGun = (event) => {
    switch(event.code) {
      case 'Digit1':
        gun.src = arrWeapon[0];
        saveGun.play();
        changeWeapon1();
        break;
    
      case 'Digit2':
        gun.src = arrWeapon[1];
        saveGun.play();
        changeWeapon2();
        break;
  
      case 'Digit3':  
        gun.src = arrWeapon[2];
        saveGun.play();
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
    ak47Hit.play();
    if (event.x < 750) {
        let fire = new Fire(event.x);
    } else {
        let fire = new Fire(event.x - 120);
    }
    setTimeout(() => document.querySelector('.fire').remove(), 100);
    gun.style.marginBottom = '-40px';
    setTimeout(() => gun.style.marginBottom = '0px', 100);
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
    timerId = setTimeout(() => huckPlayer(), (Math.floor(Math.random() * 8) * 1000));
}
  
function huckPlayer() {
    console.log('ki');
    const damage = document.createElement('div');
    damage.classList.add('bgred');
    headshot.play();
    scene.append(damage);
    setTimeout(() => damage.remove(), 100);
    randomHuckPlayer();
    damagePlayer();
}

const damagePlayer = () => {
    lineBlue.style.width = '100%';
    //countLineBlue
    countLineBlue -= Math.floor(Math.random() * 30);
    lineBlue.style.width = `${countLineBlue}%`;
  
    if ( countLineBlue <= 0 ) {
      //hpPlayer.textContent = 'мертв';
      gun.style.display = 'none';
      //livePlayer.style.width = '100%'; 
      lineBlue.style.backgroundColor = 'rgb(195, 194, 194)';
      death.play();
      clearTimeout(timerId);
      //bot1.removeEventListener('click', huck);
      //level1.removeEventListener('click', hit);
      //startOver();
    } else {
      //hpPlayer.textContent = `${countLineBlue}%`;
      console.log('neki')
    }
  }



  