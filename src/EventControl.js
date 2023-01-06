class EventConrtol {
  constructor(observer, hero) {
    this.observer = observer;
    this.hero = hero;
  }
  getEvent = (event) => {
    if (event === undefined) {
      return;
    }
    event.stopPropagation();
    // console.log(event);
    this.observer.broadcast(event);
    if (document.getElementById('selected')) {
      console.log(this.hero.weaponArr[0].broadcast());
      this.hero.weaponArr[0].broadcast(event);
    }
  }
// DELETE EVENTCONTROL CLASS UNUSLLES FING
}