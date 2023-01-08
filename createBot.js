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
        let check = event.target.offsetParent.nextElementSibling.getAttribute('value'); // проверка значениея уровня ХП игрока
        if (event.target.tagName !== 'IMG' || check <= 0) { 
            return;
        } else {
            if (this.liveLevel <= 0) {
                clearTimeout(timerId);
                audio.death.play();
                event.target.parentNode.remove();
                data["data-count_frag"] += 1;
                localStorage.setItem('data', JSON.stringify(data))
                newLevel();
                setTimeout(() => level.delScene(), 1500);
                setTimeout(() => openNewGame(), 1500);
            }
            let blood = new Blood(event.x, event.y);
            setTimeout(() => document.querySelector('.blood').remove(), 400);
            this.liveLevel -= Math.floor(Math.random() * 20);
            event.target.previousSibling.setAttribute('value', this.liveLevel);
            data["data-count_hits"] += 1;
            localStorage.setItem('data', JSON.stringify(data))
        }
    }
}

