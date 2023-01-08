'use strict';

class Fire {
    constructor (width) {
        this.fire = document.createElement('img');
        this.fire.setAttribute('src', './img/fire.png');
        scene.append(this.fire);
        this.fire.classList.add('fire');
        this.fire.style.left = `${width}px`;
    }
}