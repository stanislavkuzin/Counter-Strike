class Enemy extends Unit {
    constructor(num) {
        super();
        this.num = num;
        this.unit.classList.add('enemy');
        this.unit.setAttribute('id', `enemy_${this.num}`);
        this.enemyBody = document.createElement('label');
        this.enemyBody.setAttribute('for', `enemy_${this.num}`);
        this.enemyBody.style.left = `${200 * this.num}px`;
    }
}