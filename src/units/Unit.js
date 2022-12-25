class Unit{
    constructor(){
        this.liveLevel = 100;
        this.unit = document.createElement('progress');
        this.unit.setAttribute('value', this.liveLevel);
        this.unit.setAttribute('min', 0);
        this.unit.setAttribute('max', 100);
        this.unit.classList.add('unit');
    }
    appendTo(DOMElem){
        DOMElem.append(this.unit);
    }
}