class Enemy extends Unit {
    constructor(num) {
        super();
        this.unit.classList.add('enemy');
        this.unit.setAttribute('id', `enemy_${num}`);
        this.num = num;
        this.enemyBody = document.createElement('label');
        this.enemyBody.setAttribute('for', `enemy_${num}`);
    }
}