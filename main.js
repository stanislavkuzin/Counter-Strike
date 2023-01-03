
// const hero = new Hero();
// const ememy = new Enemy();
// ememy.appendBody();
// hero.appendBody()

// const eventControl = new EventConrtol(new SceneFabric(1)); 
let level = new SceneFabric(1); // - создаем уровень (этуже переменную можно перезаписывать при прохождении уровня и переходк на другой)
level.createScene() // метод отрисовывает все элементы в html
document.body.addEventListener('click', level.eventControl.getEvent);
console.log(level);
// для адаптиBного отображения объектов можно использовать Window events 
// https://developer.mozilla.org/en-US/docs/Web/API/Window#transition_events

