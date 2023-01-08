class Observer {
    constructor() {
      this.subscribers = [];
    }
    subscribe(damageBot) {
      this.subscribers.push(damageBot);
    }
    unsubscribe(damageBot) {
      this.subscribers.filter(callBack =>{
        callBack !== damageBot;
      });
    }
    broadcast(event) {
      this.subscribers.forEach((damageBot) => {
        damageBot(event);
      });
    }
  }