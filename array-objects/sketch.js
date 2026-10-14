// Arrays and Object Notaion Project
// Ryley
// Oct 7
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let groundX = 0;
let groundY;
let groundWidth;
let groundHeight = 50;


//Function to make the server for online play
function preload() {
  partyConnect(
    "wss://demoserver.p5party.org",
    "array-objects"
  );
}

//Basic Setup Function
async function setup() {
  createCanvas(windowWidth, windowHeight);
  groundY = windowHeight - groundHeight;
  groundWidth = windowWidth;
}

//Basic Draw Function
function draw() {
  //background(220);
  ground();
}

//Creates the Ground
function ground() {
  rect(groundX, groundY,groundWidth,groundHeight);
}