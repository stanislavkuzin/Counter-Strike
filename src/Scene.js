class Scene {
    // отрисовка окружения сцены (обращение к фабрике которая занимается:
    // 1. отрисовкой окружения 
    // 2. отрисовкой персонажей 
    // 3. подписка Юнитов на другие "наблюдатели"
    // )

    // создание персонажей 
    static backgroundArr = ["./img/back.jpg", "./img/gif2.gif", "./img/gif3.gif"];
    constructor(level) {
        this.levelWrapper = document.createElement('div');
        this.levelWrapper.classList.add('wrapper');
        this.levelWrapper.style.width = '100%';
        this.levelWrapper.style.height = '100%';
        this.levelWrapper.style.backgroundImage = `url(${Scene.backgroundArr[level - 1]})`;
    }

    appendBody(){
        document.querySelector('body').append(this.levelWrapper);
    }

}