class Hero extends Unit {
    constructor(level) {
        super();
        this.unit.classList.add('hero');
        this.weapon = this.createWeapon(level);
    }
    createWeapon(level) {
        let weaponArr = [];
        weaponArr.push(new Weapon(level)); // тест
        weaponArr.push(new Weapon(level)); // тест
        weaponArr.push(new Weapon(level)); // тест
        return weaponArr;
    }
    // пока не работает
    // chengeWeapon(event) {
    //     switch (event) {
    //         case 1: {
    //             this.weapon[1];
    //             break;
    //         }
    //         case 2: {
    //             this.weapon[2];
    //             break;
    //         }
    //         case 3: {
    //             this.weapon[3];
    //             break;
    //         }
    //         default: {
    //             return;
    //         }
    //     }
    // }
}