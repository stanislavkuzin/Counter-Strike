class Hero extends Unit {
    constructor(level) {
        super();
        this.weaponArr = [];
        this.weaponList = this.createWeapon(level);
        this.unit = this.renderHero();
    }

    createWeapon() {
        const allWeapon = document.createElement('div');
        allWeapon.classList.add('weaponList');
        this.weaponArr = [];
        for (let i = 0; i < 3; i += 1) {
            this.weaponArr.push(new Weapon(i));
            allWeapon.append(this.weaponArr[i].weaponOption);
        }
        return allWeapon;
    }
    renderHero() {
        this.unit.classList.add('hero');
        return this.unit;
    }
    // пока не работает
    changeWeapon(event) {
        switch (event) {
            case 1: {
                this.weapon[1];
                break;
            }
            case 2: {
                this.weapon[2];
                break;
            }
            case 3: {
                this.weapon[3];
                break;
            }
            default: {
                return;
            }
        }
    }
}