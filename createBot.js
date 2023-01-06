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
        // если добавить игроку progress
        // к нину легче будет добраться через *event.targe.nextSibling*
        // и проверить уровень ХП
        // Второй вариант отписаться от обсервера (есть ошибка при реализации)
        if (event.target.tagName !== 'IMG' ) { // сюда добавить условие ИЛИ
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
        }
    }
}

