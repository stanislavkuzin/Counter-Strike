'use strict';

let muteButton = document.createElement('div');
let muteIcon = document.createElement('span');
muteIcon.classList.add('material-icons');
muteIcon.textContent = 'volume_up';
muteButton.append(muteIcon);
muteButton.classList.add('muteButton');
document.body.append(muteButton);

const audio = {
    audioMenu: new Audio('./aud/menutheme.mp3'),
    audioHover: new Audio('./aud/zvukhover.mp3'),
    audioGame: new Audio('./aud/audiogame.mp3'),
    clickButton: new Audio('./aud/click.mp3'),
    saveGun: new Audio('./aud/gundraw.mp3'),
    diglHit: new Audio('./aud/deaglehit.mp3'),
    m4a1Hit: new Audio('./aud/m4a1hit.mp3'),
    ak47Hit: new Audio('./aud/ak47hit.mp3'),
    gogogo: new Audio('./aud/gogogo.mp3'),
    death: new Audio('./aud/death.mp3'),
    headshot: new Audio('./aud/headshot2.mp3')
}

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