class EventConrtol {
  constructor(observer) {
    this.observer = observer;
  }
  getEvent = (event) => {
    if (event === undefined) {
      return;
    }
    event.stopPropagation();
      this.observer.broadcast(event);
  }
}