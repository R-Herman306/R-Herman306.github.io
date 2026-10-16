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
let playerBodyX = 5;
let playerBodyY = groundY + groundHeight;
let user;

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
  player();
}

//Creates the Ground
function ground() {
  fill("Green");
  rect(groundX, groundY,groundWidth,groundHeight);
}

//Takes username from player input and picks the player colour
function playerInfo() {
  user =  {
    name: '${username}', 
    playerColour: ["green", "red", "blue", "white", "black"],
  };
}

function player() {
  rect(playerBodyX,playerBodyY,50,50);
}