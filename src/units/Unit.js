class Unit {
    constructor() {
        this.liveLevel = 100;
        this.unit = this.renderUnit();
    }
    appendTo(DOMElem) {
        DOMElem.append(this.unit);
    }
    renderUnit() {
        let unitWrap = document.createElement('div');
        unitWrap.classList.add('unitWrap');
        let unit = document.createElement('progress');
        unit.setAttribute('value', this.liveLevel);
        unit.setAttribute('min', 0);
        unit.setAttribute('max', 100);
        unit.classList.add('unit');
        unitWrap.append(unit);
        return unitWrap;
    }
}