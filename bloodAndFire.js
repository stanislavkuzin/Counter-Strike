'use strict';

class Blood {
    constructor (width, height) {
        this.blood = document.createElement('img');
        this.blood.setAttribute('src', './img/blood.png');
        scene.append(this.blood);
        this.blood.classList.add('blood');
        this.blood.style.position = 'absolute';
        this.blood.style.left = `${width}px`;
        this.blood.style.top = `${height}px`;
    }
}

class Fire {
    constructor (width) {
        this.fire = document.createElement('img');
        this.fire.setAttribute('src', './img/fire.png');
        scene.append(this.fire);
        this.fire.classList.add('fire');
        this.fire.style.left = `${width}px`;
    }
}