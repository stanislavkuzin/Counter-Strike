
// const hero = new Hero();
// const ememy = new Enemy();
// ememy.appendBody();
// hero.appendBody()

// const eventControl = new EventConrtol(new SceneFabric(1)); 
let level = new SceneFabric(1); // - создаем уровень (этуже переменную можно перезаписывать при прохождении уровня и переходк на другой)
level.createScene() // метод отрисовывает все элементы в html
document.body.addEventListener('click', level.eventControl.getEvent);
console.log(level);
// для адаптиBного отображения объектов можно использовать Window events 
// https://developer.mozilla.org/en-US/docs/Web/API/Window#transition_events


// // set the initial position of the gun barrel
// let barrelX = 50;
// let barrelY = 50;

// // set the size of the gun barrel
// let barrelWidth = 100;
// let barrelHeight = 50;

// // create a new SVG element for the gun barrel
// let barrel = document.createElementNS("http://www.w3.org/2000/svg", "rect");
// // set the position and size of the gun barrel
// barrel.setAttribute("x", barrelX);
// barrel.setAttribute("y", barrelY);
// barrel.setAttribute("width", barrelWidth);
// barrel.setAttribute("height", barrelHeight);
// // set the color of the gun barrel
// barrel.setAttribute("fill", "yellow");

// // add the gun barrel to the SVG element
// let svg = document.getElementById("svg");
// svg.appendChild(barrel);

// function shoot() {
//   // animate the gun barrel
//   barrel.animate([
//     // animate the gun barrel's position and size
//     { x: barrelX, y: barrelY, width: barrelWidth, height: barrelHeight },
//     { x: barrelX - 20, y: barrelY - 20, width: barrelWidth + 40, height: barrelHeight + 40 }
//   ], {
//     // set the animation duration
//     duration: 100,
//     // set the easing function
//     easing: "ease-out"
//   });
//   // reset the gun barrel's position and size after the animation is complete
//   setTimeout(function() {
//     barrel.setAttribute("x", barrelX);
//     barrel.setAttribute("y", barrelY);
//     barrel.setAttribute("width", barrelWidth);
//     barrel.setAttribute("height", barrelHeight);
//   }, 100);

//   var size = 100;

// // set the center point of the star
// var centerX = 50;
// var centerY = 50;

// // create a new path element for the star
// var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

// // create the points for the star
// var points = [];
// for (var i = 0; i < 8; i++) {
//   var angle = 2 * Math.PI * i / 8;
//   var radius = (i % 2 == 0) ? size / 2 : size / 4;
//   var x = centerX + radius * Math.cos(angle);
//   var y = centerY + radius * Math.sin(angle);
//   points.push(x + "," + y);
// }

// // create the d attribute for the path element
// var d = "M" + points.join("L") + "Z";
// path.setAttribute("d", d);

// // set the stroke and fill colors for the star
// path.setAttribute("stroke", "red");
// path.setAttribute("fill", "yellow");

// // add the star to the SVG element
// var svg = document.getElementById("svg");

// svg.appendChild(path);
