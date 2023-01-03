class Scene {
    // отрисовка окружения сцены (обращение к фабрике которая занимается:
    // 1. отрисовкой окружения 
    // 2. отрисовкой персонажей 
    // 3. подписка Юнитов на другие "наблюдатели"
    // )

    // создание персонажей 
    static backgroundArr = ["./img/back.jpg", "./img/gif2.gif", "./img/gif3.gif"];
    constructor(level) {
        this.levelWrapper = document.createElement('div'); // общая оболочка уровня
        this.levelWrapper.classList.add('wrapper');// общая оболочка уровня
        this.levelWrapper.style.width = '100%';// общая оболочка уровня
        this.levelWrapper.style.height = '100%';// общая оболочка уровня
        this.levelWrapper.style.backgroundImage = `url(${Scene.backgroundArr[level - 1]})`; // общая оболочка уровня -  задаем фон в соответствии с уровнем
        // replase to Hero // this.weaponSelect = this.weaponSelect(); // пока не работает (на экране будут отображаться иконки оружия, выбранное будет подсвечиваться)
        // this.fragCount = this.fragCount(); - вывод на экран счетчика фрагов
    }

    appendBody() {
        document.querySelector('body').append(this.levelWrapper);
    }

    
    // fragCount(event){
    //     let fragCount
    //     // .....textContent = event.count
    //     return fragCount;
    // }

}