'use strict';

class Live {
    constructor(name) {
        this.name = name;
        this.live = document.createElement('div');
        this.live.classList.add('live');
        this.line = document.createElement('div');
        this.line.classList.add('line');
        this.line.setAttribute('id','lineRed')
        this.line.textContent = '100hp';
        this.live.append(this.line);
        return this.live;
    }
}

