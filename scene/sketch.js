// Interactive Scene
// Ryley
// Sept. 22 , 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Defining Global Variables
let x = 100;
let y = 100;
let squareSize = 90;
let projectileSize = 20;
let speed = 5;

//Basic Setup Function
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Basic Draw Function
function draw() {
  background(255);
  player();
  movement();
  weapon();
  shoot();
}

//Function that controls the state of the player and movement with WASD. Also takes care of if the player is touching the border.
function movement() {
  if (keyIsDown("w") && y >= 0) {
    y -=speed;  
  }
  if(keyIsDown("s") && y <= windowHeight - squareSize ) {
    y += speed;
  }
  if(keyIsDown("a") && x >= 0 ) {
    x -= speed;   
  }
  if (keyIsDown("d") && x <= windowWidth - squareSize) {
    x += speed;   
  }
  
}

//Funtion to create player
function player() {
  fill("blue");
  rect(x,y,squareSize);
}

//Creates the object that shoots the balls
function weapon() {
  fill("black");
  rect(x + 55, y + 25, squareSize - 25, squareSize/4);

}
