class Enemy extends Unit {
    // Enemy должен быть наблюдателем за оружием. В смучае окончания обоймы оружие очищает массив наблюдателей
    constructor(num) {
        super();
        this.num = num;
        this.unit.classList.add('unitWrap');
        this.unit.firstChild.setAttribute('id', `enemy_${this.num}`);
        this.enemyBody = document.createElement('label');
        this.enemyBody.setAttribute('for', `enemy_${this.num}`);
        this.unit.style.left = `${400 * this.num}px`;
        this.unit.style.top = `350px`;
        this.unit.append(this.enemyBody);

    }
    nottify = (event) => {
        if (event.target.tagName !== 'LABEL') {
            return;
        }
        event.stopPropagation()
        if (this.liveLevel - 10 <= 0) {
            this.unit.remove();
        }
        let idEvent = event.target.control.getAttribute('id').slice(-1);
        if (+idEvent === this.num) {
            this.liveLevel -= 10;
            event.target.control.setAttribute('value', this.liveLevel);
        } else {
            return;
        }
    }
    move = () => {
        let leftPosition = Math.random()*100;
        this.unit.animate([
            { transform: `translateX(0px)`},
            { transform: `translateX(${leftPosition}px)`},
            { transform: `translateX(0px)`}
        ], {
            duration: 2500,
            easing: "ease-out"
        });
    }
}