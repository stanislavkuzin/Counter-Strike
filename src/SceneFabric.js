class SceneFabric {
    
    constructor(level) {
        this.level = level;
        this.enemis = this.createEnemy(this.level);
        this.hero = new Hero(level);
        this.scene = new Scene(this.level);
    }
    // метод создает соответствующее уровню, количество Enemy. push-т в массив и возвращает в поле  this.enemis.
    createEnemy(level) {
        let arr = [];
        for (let i = 0; i < (level * 2); i += 1) {
            arr.push(new Enemy(i + 1));
        }
        return arr;
    }
    createScene() {
        this.scene.appendBody(); // добавляет сцену в Body
        this.hero.appendTo(this.scene.levelWrapper); // добавляет героя на страницу

        // добавляет enemy  на страницу 
        this.enemis.forEach((enemy) => {
            enemy.appendTo(this.scene.levelWrapper);
            this.scene.levelWrapper.append(enemy.enemyBody);
        });

        // добавляет оружие героя на страницу
        this.hero.weapon.forEach(weapon =>{
            console.log(weapon);
            this.scene.levelWrapper.append(weapon.buletCounter);
        })
    }

}