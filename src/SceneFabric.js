class SceneFabric {
    
    constructor(level) {
        this.level = level;
        this.enemis = this.createEnemy(this.level);
        this.hero = new Hero();
        this.scene = new Scene(this.level);
    }
    createEnemy(level) {
        let arr = [];
        for (let i = 0; i < (level * 2); i += 1) {
            arr.push(new Enemy(i));
        }
        return arr;
    }
    createScene() {
        this.scene.appendBody();
        this.hero.appendTo(this.scene.levelWrapper);
        this.enemis.forEach((enemy) => {
            enemy.appendTo(this.scene.levelWrapper);
            this.scene.levelWrapper.append(enemy.enemyBody);
            // enemy.enemyBody.appendTo(this.scene.levelWrapper);
        });
    }

}