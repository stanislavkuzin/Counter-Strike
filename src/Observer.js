class Observer {
    constructor() {
        this.subscribers = [];
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    unsubscribe(callback) {
        //
    }
    broadcast(data) {
        this.subscribers.forEach((callback) => {
            callback(data);
        });
    }
}
// ПРЕДПОЛОЖЕНИЕ
// обсервер на примере оружия: при смене оружия меняется уровень урона.
// то есть от ножа - низких уровень урона, от пистолета - выше, от автомата - максимальный.
// enemy подписаны на переключение оружия и соответственно реагируют на  него