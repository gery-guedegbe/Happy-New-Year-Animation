let max = 400;
let body = document.querySelector("body");

function move() {
  for (i = 0; i < max; i++) {
    span = document.createElement("span");

    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let width = Math.random() * 30;
    let height = Math.random() * 10;
    let delay = Math.random() * 5;

    span.style.left = posX + "px";
    span.style.top = posY + "px";
    span.style.width = width + "px";
    span.style.height = height + "px";
    span.style.animationDelay = delay + "s";

    console.log(span);
    body.append(span);
  }
}

move();
