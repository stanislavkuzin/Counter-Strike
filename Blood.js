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
