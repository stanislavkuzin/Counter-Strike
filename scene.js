'use strict';

const bgScene = ['./img/map1.jpg', './img/map2.jpg', './img/map3.jpg', './img/map4.jpg', './img/map5.jpg'];
const botName = ['bot1', 'bot2', 'bot3'];

let level;
let botOnLevel;
let playerGame;
let menuWeapon;
let startTime;
let countMap = 0;
let countBot = -1;
let data = {
    'data-count_shoots': 0,
    'data-count_hits': 0
}
class Scene {
    constructor(value, mapLevel) {
        this.value = value;
        this.scene = document.createElement('section');
        this.scene.classList.add('scene');
        this.scene.setAttribute('id', 'scene');
        this.scene.style.backgroundImage = `url(${bgScene[mapLevel - 1]})`;
        body.append(this.scene);

        this.delScene = function () {
            this.scene.remove();
        }
    }
}

const openNewGame = () => {
    if (countMap === 5) {
        countMap = 1;
    } else {
        countMap += 1;
    }
    if (countBot === 2) {
        countBot = 0;
    } else {
        countBot += 1;
    }
    level = new Scene(`level${countMap}`, countMap);
    let observer = new Observer(); // M
    botOnLevel = new CreateBot(botName[countBot]);
    observer.subscribe(botOnLevel.damageBot);
    setTimeout(observer.unsubscribe(botOnLevel.damageBot), 3000);
    document.querySelector('.bot-duck').addEventListener('click', (event) => { observer.broadcast(event) }); // add Listener for observer
    playerGame = new Player(arrWeapon[0]);
    menuWeapon = new MenuWeapon();
    localStorage.setItem('data', JSON.stringify(data));
    let sceneMenu = new sceneTextMenu;
    audio.audioMenu.pause();
    audio.audioGame.volume = '0.1';
    audio.audioGame.play();
    audio.audioGame.loop = true;
    audio.gogogo.play();
    body.addEventListener('keydown', closeMap);
    body.removeEventListener('keydown', newsGame);
    scene.addEventListener('click', hit);
    scene.addEventListener('click', () => {drawResults(localStorage)});
    startTime = setTimeout(() => playerGame.huckPlayer(), 1000);
}

const closeMap = (event) => {
    if (event.key !== 'Escape') {
        return;
    } else {
        level.delScene();
        audio.audioGame.pause();
        audio.audioMenu.play();
        clearTimeout(timerId);
        clearTimeout(startTime);
        body.removeEventListener('mousemove', aim);
        endGame.style.display = 'none';
    }
}

newGame.addEventListener('click', openNewGame); // new game button (LoadScrean)


function drawResults(localStorage) {
    let temp = JSON.parse(localStorage.getItem('data'));
    let count = 0;
    let divArr = Array.from(document.querySelectorAll('.box_in'));
    for (const item in temp) {
           divArr[count].textContent = temp[item]; 
        count += 1;
    }
}





