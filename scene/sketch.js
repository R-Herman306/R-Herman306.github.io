// Interactive Scene
// Ryley
// Sept. 22 , 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let x = 100;
let y = 100;
let squareSize = 90;
let state = notMoving;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  player();
}


function player() {
  fill("blue");
  rect(x,y,squareSize);
}