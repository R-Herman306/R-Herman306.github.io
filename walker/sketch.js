// Walker OOP Demo
// Ryley Herman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Walker {
  constructor(x,y, theColor) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.diameter = 5;
    this.color = theColor;
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

// let ryley;
// let theo;

let theWalkers = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // ryley = new Walker(width/2, height/2);
  // theo = new Walker(300, 400);
  // theo.color = "blue";

  noStroke();
}

function draw() {
  // ryley.move();
  // ryley.display();

  // theo.move();
  // theo.display();
  for(let theWalker of theWalkers) {
    theWalker.move();
    theWalker.display();
  }
}

function mousePressed() {
  let theColor = color(random(255));
  let someWalker = new Walker(mouseX, mouseY, theColor);
  theWalkers.push(someWalker);
}
