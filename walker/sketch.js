// Walker OOP Demo
// Ryley Herman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Walker {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.speed = 50;
    this.diameter = 500;
    this.color = "red";
  }

  display() {
    fill(this.color);
    circle(this.x, this.y, this.diameter);

  }

  move() {
    let choice = random(100);
    if(choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;

    }
    else {
      this.x += this.speed;
    }
  }
}

let ryley;
let theo;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  ryley = new Walker(width/2, height/2);
  theo = new Walker(300, 400);
  theo.color = "blue";

  noStroke();
}

function draw() {
  ryley.move();
  ryley.display();

  theo.move();
  theo.display();
}
