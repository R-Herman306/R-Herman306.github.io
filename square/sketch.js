// Square moving around edge of screen
let size = 30;
let speed = 15;
let x = 0;
let y = 0;
let state = "right";

async function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255);
  move();
  display();
}

function move() {
  if (state === "right") {
    x += speed;
    if(x >= width - size) {
      state = "down";
    }
  }
  else if(state === "down") {
    y += speed;
    if (y > windowHeight - size){
      state = "left";
    }
  }
  else if (state === "left") {
    x -= speed;
    if (x < 0) {
      state = "up";
    }
  }
  else if( state === "up") {
    y -= speed;
    if(y < 0 ) {
      state = "right";
    }
  }
}


function display() {
  fill("black");
  square(x,y,size);
}