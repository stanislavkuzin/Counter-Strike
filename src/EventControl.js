class EventConrtol {
  constructor(observer) {
    this.observer = observer;
  }
  getEvent = (event) => {
    if (event === undefined) {
      return;
    }
    event.stopPropagation();
      // console.log(event);
      this.observer.broadcast(event);
  }
  
}