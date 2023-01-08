'use strict';

class sceneTextMenu {
    constructor() {
        this.menu = this.draw(localStorage);
    }
    draw(localStorage) {
        let box = document.createElement('div');
        box.classList.add('box_out');
        let temp =  JSON.parse(localStorage.getItem('data'));
        let count = 1;
        for (const item in data) {
                let box_in = document.createElement('div');
                box_in.classList.add('box_in', 'inmenu-text');
                box_in.setAttribute('id',`counter${count}`);
                box_in.textContent = temp[item];
                box.append(box_in);
                count += 1;
        }
        scene.append(box);
        return box;
    }
}