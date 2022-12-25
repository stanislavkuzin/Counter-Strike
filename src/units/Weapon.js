class Weapon {
    static weaponImg = {
        knife: 'knife.png',
        gun: 'digl.png',
        machine: 'ak471.png'
    };
    constructor(level) {
        this.level = level;
        this.stockBullets = 100; 
        this.buletCounter = document.createElement('div');
        this.buletCounter.style.width = '100%'
        this.buletCounter.classList.add('selected');
        this.buletCounter.textContent = this.stockBullets;
        this.heroWeapon = document.createElement('img');
        this.heroWeapon.setAttribute ('src',  '../../game/img/ak471.png');
        this.buletCounter.append(this.heroWeapon)
    }
    // пока не работает
    // shoot() {
    //     this.stockBullets -= 1;
    //     console.log(this.stockBullets);
    // }
}