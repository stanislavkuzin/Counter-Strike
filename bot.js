'use strict'

const imgBot = ['./img/bot1.png','./img/bot2.png','./img/bot3.png','./img/bot4.png','./img/bot5.png'];

class Bot {
    constructor(name, bot) {
        this.name = name;
        this.live = new Live(name);
        this.hero = document.createElement('img');
        this.hero.setAttribute ('src', bot);
        this.hero.classList.add('bot-duck');
        return this.hero;
    }
}

function botHeroFactory(type) {
    if (type === 'bot1') {
        return new Bot (type, imgBot[0]);
    } else if (type === 'bot2') {
        return new Bot (type, imgBot[1]);
    } else if (type === 'bot3') {
        return new Bot (type, imgBot[2]);
    } else if (type === 'bot4') {
        return new Bot (type, imgBot[3]);
    } else if (type === 'bot5') {
        return new Bot (type, imgBot[4]);
    } else {
        return null;
    }
}

const bot = botHeroFactory;


