class BotLiveBar{
    constructor() {
        this.liveLevel = 100;
        this.unit = this.renderUnit();
    }
    renderUnit() {
        let unit = document.createElement('progress');
        unit.setAttribute('value', this.liveLevel);
        unit.setAttribute('min', 0);
        unit.setAttribute('max', 100);
        unit.classList.add('unit');
        return unit;
    }
}