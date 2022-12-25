class Unit{
    constructor(){
        this.liveLevel = 100;
        this.unit = document.createElement('meter');
        this.unit.setAttribute('value', this.liveLevel);
        this.unit.setAttribute('min', 0);
        this.unit.setAttribute('max', 100);
        // this.unit.setAttribute();
        this.unit.classList.add('unit');
        // this.unit.style.width = `${this.liveLevel}px`;
    }
    appendTo(DOMElem){
        DOMElem.append(this.unit);
    }
}