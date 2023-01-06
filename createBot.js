'use strict';

class CreateBot extends BotLiveBar {
    constructor(name) {
        super();
        this.live = this.unit; // заменил кнструкцию из 2х "div" на 'progress'
        this.bot = bot(name);
        this.boxBot = document.createElement('div');
        this.boxBot.classList.add('boxbot');
        this.boxBot.classList.add('bot-anim');
        this.boxBot.setAttribute('id', name);
        this.boxBot.append(this.live);
        this.boxBot.append(this.bot);
        scene.append(this.boxBot);

        this.offDamageBot = function () {
            this.boxBot.removeEventListener('click', this.damageBot);
        }
    }
    damageBot = (event) => {
        if (event.target.tagName !== 'IMG') {
            return;
        } else {
            if (this.liveLevel <= 0) {
                clearTimeout(timerId);
                death.play();
                event.target.parentNode.remove();
            }
            let blood = new Blood(event.x, event.y);
            setTimeout(() => document.querySelector('.blood').remove(), 400);
            this.liveLevel -= Math.floor(Math.random() * 20);
            event.target.previousSibling.setAttribute('value', this.liveLevel);
            // event.target.previousSibling.lastChild.style.borderRadius = '10px 0 0 10px';
        }
    }
}

// let countLive;

// const damageBot = (event) => {
//     if (event.target.tagName !== 'IMG') {
//         return;
//     } else {
//         if (countLive <= 0) {
//             clearTimeout(timerId);
//             death.play();
//             event.target.parentNode.remove();
//             countLive = 100;
//         }
//         console.log(event.x, event.y)
//         let blood = new Blood(event.x, event.y);
//         setTimeout(() => document.querySelector('.blood').remove(), 400);
//         countLive -= Math.floor(Math.random() * 20);
//         event.target.previousSibling.lastChild.style.width = `${countLive}%`;
//         event.target.previousSibling.lastChild.style.borderRadius = '10px 0 0 10px';
//     }
// }

