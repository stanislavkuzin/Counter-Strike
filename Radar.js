'use strict';

class Radar {
    constructor () {
        this.radar = document.createElement('img');
        this.radar.classList.add('radar');
        this.radar.setAttribute('src', './img/radar.gif');
        scene.append(this.radar);
    }
}