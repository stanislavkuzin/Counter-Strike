// mute control
checkLocalStorage();
function checkLocalStorage() {
    let temp = localStorage.getItem('data-mute');
    if (temp === 'volume_off') {
        mute();
    }
}

function mute() {
    for (const key in audio) {
        audio[key].muted = !audio[key].muted;
        audio[key].muted ? muteIcon.textContent = 'volume_off' : muteIcon.textContent = 'volume_up';
        localStorage.setItem('data-mute', muteIcon.textContent);
    }
}

// bot factory
function botHeroFactory(type) {
    if (type === 'bot1') {
        return new Bot (type, imgBot[0]);
    } else if (type === 'bot2') {
        return new Bot (type, imgBot[1]);
    } else if (type === 'bot3') {
        return new Bot (type, imgBot[2]);
    } else {
        return null;
    }
}
//   ****************************
// from main
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

  
const exitGame = () => {
    audio.audioMenu.pause();
    textFon.style.display = 'flex';
    imgFon.style.opacity = '1';
    imgFon.style.display = 'block';
    controlsdiv.style.display = 'none';
    body.addEventListener('keydown', menu);
    body.removeEventListener('keydown', closeMap);
  }

  function controls(controls) {
    let buttons = [
      'Esc - exit of current geme and return main menu',
     'BackSpace - move to the next level',
      'Enter - return main menu',
      '1 - choose a weapon',
      '2 - choose a weapon',
      '3 - choose a weapon'];
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
//   ****************************


//   ****************************
// from Player

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
//   ****************************



//   ****************************
// from Scene
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
    new Radar();
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

const start = () => {
    countMap = 0;
    levelDifficultyBot = 30;
    levelDifficultyPlayer = 30;
    sceneload.style.display = 'flex';
    load.style.display = 'flex';
    controlsdiv.style.display = 'none';
    setTimeout(() => openNewGame(), 5000);
    setTimeout(() => sceneload.style.display = 'none', 6000);
    setTimeout(() => load.style.display = 'none', 5000);
}

function drawResults(localStorage) {
    let temp = JSON.parse(localStorage.getItem('data'));
    let count = 0;
    let divArr = Array.from(document.querySelectorAll('.box_in'));
    for (const item in temp) {
           divArr[count].textContent = temp[item]; 
        count += 1;
    }
}
//   ****************************
