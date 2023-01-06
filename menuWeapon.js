'use strict';

class MenuWeapon {
    constructor () {
        this.menu = document.createElement('div');
        this.menu.classList.add('menuWeapon');
        scene.append(this.menu);
        this.weapon1 = document.createElement('img');
        this.weapon1.setAttribute('src', arrWeapon[3]);
        this.weapon1.setAttribute('id', 'digl1');
        this.weapon1.classList.add('inmenu-weapon')
        this.menu.append(this.weapon1);
        this.weapon2 = document.createElement('img');
        this.weapon2.setAttribute('src', arrWeapon[4]);
        this.weapon2.setAttribute('id', 'm4a12');
        this.weapon2.classList.add('inmenu-weapon')
        this.menu.append(this.weapon2);
        this.weapon3 = document.createElement('img');
        this.weapon3.setAttribute('src', arrWeapon[5]);
        this.weapon3.setAttribute('id', 'ak473');
        this.weapon3.classList.add('inmenu-weapon')
        this.menu.append(this.weapon3);
    }
}