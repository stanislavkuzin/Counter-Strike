'use strict';

let audioMenu = new Audio('./aud/menutheme.mp3');
let audioHover = new Audio('./aud/zvukhover.mp3');
let audioGame = new Audio('./aud/audiogame.mp3');
let clickButton = new Audio('./aud/click.mp3');
let saveGun = new Audio('./aud/gundraw.mp3');
let diglHit = new Audio('./aud/deaglehit.mp3');
let m4a1Hit = new Audio('./aud/m4a1hit.mp3');
let ak47Hit = new Audio('./aud/ak47hit.mp3');
let gogogo = new Audio('./aud/gogogo.mp3');
let death = new Audio('./aud/death.mp3');

// muteButton
let headshot = new Audio('./aud/headshot2.mp3')
let muteButton = document.createElement('div');
let muteIcon = document.createElement('span');
muteIcon.classList.add('material-icons');
muteIcon.textContent = 'volume_up';
muteButton.append(muteIcon);
muteButton.setAttribute('data-mute', 'unMute');
muteButton.classList.add('muteButton');
document.body.append(muteButton);

const audio = {
    audioMenu: audioMenu,
    audioHover: audioHover,
    audioGame: audioGame,
    clickButton: clickButton,
    saveGun: saveGun,
    diglHit: diglHit,
    m4a1Hit: m4a1Hit,
    ak47Hit: ak47Hit,
    gogogo: gogogo,
    death: death,
    headshot: headshot
};

function mute(event) {
    console.log(event.target.textContent);
    for (const key in audio) {
            audio[key].muted = !audio[key].muted;
            audio[key].muted ? event.target.textContent = 'volume_off' : event.target.textContent = 'volume_up';
        // }
    }
}