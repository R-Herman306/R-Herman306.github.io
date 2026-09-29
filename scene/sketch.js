// Interactive Scene
// Ryley
// Sept. 22 , 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Defining Global Variables

const state = "NOTPLAY";
let x = 100;
let y = 100;
let squareSize = 90;
let speed = 5;
let buttonWidth = 300;
let buttonHeight = 100;

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
  startButton();
  startTitle();
}

//Function that controls the state of the player and movement with WASD. Also takes care of if the player is touching the border.
function movement() {
  if (keyIsDown("w") && y >= 0) {
    y -=speed;
  }
  if(keyIsDown("s") && y <= windowHeight - squareSize) {
    y += speed;
  }
  if(keyIsDown("a") && x >= 0) {
    x -= speed;
  }
  if (keyIsDown("d") && x <= windowWidth - squareSize) {
    x += speed;
  }
}

//Funtion to create player
function player() {
  if(state === "PLAY") {
    fill("blue");
    rect(x,y,squareSize);
  }
}

//Creates the object that shoots the balls
function weapon() {
  if(state === "PLAY") {
    fill("black");
    rect(x + 55, y + 25, squareSize - 25, squareSize/4);
  }
}

//Creates start screen button
function startButton() {
  if (state === "NOTPLAY") {
    fill("Black");
    rectMode(CENTER);
    rect(windowWidth/2, windowHeight/2 ,buttonWidth,buttonHeight );
    fill("White");
    textSize(30);
    textAlign(CENTER);
    text("Press Play", windowWidth/2,windowHeight/2);
  }
}

//Creates start screen title
function startTitle() {
  if (state === "NOTPLAY") {
    textSize(80);
    fill("Black");
    text("THE INTERACTIVE SCENE", windowWidth/2, 100);
  }
}