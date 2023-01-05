class SceneFabric {

    constructor(level) {
        this.observer = new Observer();
        this.level = level;
        this.enemis = this.createEnemy(this.level);
        this.hero = new Hero(level);
        this.scene = new Scene(this.level);
        this.eventControl = new EventConrtol(this.observer);
    }
    // метод создает соответствующее уровню, количество Enemy. push-т в массив и возвращает в поле  this.enemis.
    createEnemy(level) {
        let arr = [];
        for (let i = 0; i < (level * 2); i += 1) {
            let enemy = new Enemy(i + 1);
            arr.push(enemy);
        }
        return arr;
    }
    createScene() {
        this.scene.appendBody(); // добавляет сцену в Body
        this.hero.appendTo(this.scene.levelWrapper); // добавляет героя на страницу

        // добавляет enemy  на страницу 
        this.enemis.forEach((enemy) => {
            enemy.appendTo(this.scene.levelWrapper);
            this.observer.subscribe(enemy.nottify);
        });

        // добавляет оружие героя на страницу
        this.hero.weaponArr.forEach(weapon => {
            this.observer.subscribe(weapon.select);
            this.observer.subscribe(weapon.fire);
        })
        this.scene.levelWrapper.append(this.hero.weaponList);
    }

}