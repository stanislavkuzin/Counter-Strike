class Weapon {
    static weaponImg = {
        0: 'knife.png',
        1: 'digl.png',
        2: 'ak471.png'
    };
    // клас должен отвечать только за функции объекта. его отрисовка должна проходить в (допустим в фабрике)
    constructor(num) {
        this.num = num;
        this.stockBullets = 100;
        this.weaponOption = this.createWeapon(this.num);
    }
    createWeapon(num) {
        let weaponDiv = document.createElement('div');
        weaponDiv.setAttribute('data-weapon', this.num)
        let stockCount = document.createElement('p');
        stockCount.textContent = this.stockBullets;
        weaponDiv.append(stockCount);
        weaponDiv.style.backgroundImage = `url(../../game/img/${Weapon.weaponImg[num]})`;
        weaponDiv.classList.add('weapon');
        if (num === 0) {
            weaponDiv.classList.add('selected');
        }
        return weaponDiv;
    }
    select = (event) => {
        let check = event.target.parentElement.className === 'weaponList'
        if (!check) {
            return;
        }
        let allWeapon = event.target.parentElement.childNodes;
        Array.from(allWeapon).forEach(item => {
            item.classList.remove('selected');
        });
        event.target.classList.toggle('selected');
    }
    fire = (event) => {
        if (event.target.parentElement.className === 'weaponList') {
            return;
        }

        if (this.weaponOption.className === 'weapon selected') {
            this.stockBullets -= 1;
            this.weaponOption.innerHTML = `<p>${this.stockBullets}</p>"`;
            this.animateClick(event);
            return;
        }
    }
    animateClick(event) {
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = event.x + "px";
        div.style.top = event.y + "px";
        div.style.width = "5px";
        div.style.height = "5px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = "red";
        document.body.appendChild(div);
        div.animate([
            { width: "5px", height: "5px", opacity: 1, transform: 'translateY(-0px)', transform: 'translateX(-0px)'},
            { width: "50px", height: "50px", opacity: 0, transform: 'translateY(-50px)', transform: 'translateX(-20px)'}

        ], {
            duration: 500,
            easing: "ease-out"
        });
        setTimeout(function () {
            div.remove();
        }, 500);
    }
}
/**
class Weapon {
  constructor(type, numProjectiles) {
    this.type = type;
    this.numProjectiles = numProjectiles;
  }

  shoot() {
    if (this.numProjectiles > 0) {
      this.numProjectiles--;
      console.log(`Firing ${this.type}! Remaining projectiles: ${this.numProjectiles}`);
    } else {
      console.log(`Out of projectiles for ${this.type}!`);
    }
  }
}

const pistol = new Weapon('pistol', 6);
pistol.shoot(); // Output: "Firing pistol! Remaining projectiles: 5"
pistol.shoot(); // Output: "Firing pistol! Remaining projectiles: 4"
pistol.shoot(); // Output: "Firing pistol! Remaining projectiles: 3"
pistol.shoot(); // Output: "Firing pistol! Remaining projectiles: 2"
pistol.shoot(); // Output: "Firing pistol! Remaining projectiles: 1"
pistol.shoot(); // Output: "Firing pistol! Remaining projectiles: 0"
pistol.shoot(); // Output: "Out of projectiles for pistol!"
 */