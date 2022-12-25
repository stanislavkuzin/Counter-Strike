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
        this.weaponSelect = this.weaponSelect(); // пока не работает (на экране будут отображаться иконки оружия, выбранное будет подсвечиваться)
        // this.fragCount = this.fragCount(); - вывод на экран счетчика фрагов
    }

    appendBody() {
        document.querySelector('body').append(this.levelWrapper);
    }
    weaponSelect() {
        const allWeapon = document.createElement('select');
        for (let i = 0; i < 3; i += 1) {
            let option = document.createElement('option');
            option.setAttribute('data-weapon', (i + 1)); // поэтому атрибуту Можно будет привязываться к событиям и клавиатуры выбрать оружие 1,2,3,4 так далее...
            allWeapon.append(option);
        }
        this.levelWrapper.append(allWeapon);
        return allWeapon;
    }
    
    // fragCount(event){
    //     let fragCount
    //     // .....textContent = event.count
    //     return fragCount;
    // }

}