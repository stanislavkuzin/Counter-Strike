'use strict';

class CreateBot {
    constructor(name) {
        this.live = new Live(name);
        this.bot = bot(name);
        this.boxBot = document.createElement('div');
        this.boxBot.classList.add('boxbot');
        this.boxBot.classList.add('bot-anim');
        this.boxBot.setAttribute ('id',  name);
        scene.append(this.boxBot);
        this.boxBot.append(this.live);
        this.boxBot.append(this.bot);
        //this.boxBot.addEventListener('click', po);
    }
    
}

